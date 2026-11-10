const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';
const TUTOR_EMAIL = 'bensfakeemail@outlook.com';

let users = [];
let bookings = [];
let tutors = [{ id: 1, name: 'Ben', score: 1390, test: 'SAT', image: '/suitimage.jpg', days: [{ id: 1, day: 'Wed', date: 28, title: 'Wednesday, October 28', times: ['9:00 AM', '1:00 PM', '2:00 PM', '6:00 PM'] }] },
{ id: 2, name: 'Matt', score: 34, test: 'ACT', image: '/suitimage.jpg', days: [{ id: 2, day: 'Thu', date: 29, title: 'Thursday, October 29', times: ['9:00 AM', '10:00 AM', '1:00 PM', '4:00 PM'] }] }

];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email, firstName: user.firstName, isTutor: user.tutorId !== null });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.post('/auth/signup', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName);

    setAuthCookie(res, user.token);
    res.send({ email: user.email, firstName: user.firstName, isTutor: user.tutorId !== null });

  }
});

apiRouter.post('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/tutors', async (req, res) => {
  res.send(tutors);
});

apiRouter.get('/tutors/:tutorId/days', async (req, res) => {
  const tutor = tutors.find((t) => t.id === Number(req.params.tutorId));
  if (!tutor) {
    res.status(404).send({ msg: 'Tutor not found' });
    return;
  }
  const days = tutor.days;
  res.send(days);
});

apiRouter.put('/availability', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (!user.tutorId) {
    res.status(403).send({ msg: 'Only tutors can set availability' });
    return;
  }
  const tutor = tutors.find((t) => t.id === user.tutorId);
  tutor.days = req.body.days;
  res.send(tutor.days);
});

apiRouter.post('/booking', async (req, res) => {
  const { tutorId, dayId, time, contactInfo } = req.body;

  const tutor = tutors.find((t) => t.id === tutorId);
  if (!tutor) {
    res.status(404).send({ msg: 'Tutor not found' });
    return;
  }

  const day = tutor.days.find((d) => d.id === dayId);
  if (!day) {
    res.status(404).send({ msg: 'Day not found' });
    return;
  }

  if (!day.times.includes(time)) {
    res.status(409).send({ msg: 'That time was just booked' });
    return;
  }

  day.times = day.times.filter((t) => t !== time);

  const booking = { tutorId, dayId, time, contactInfo };
  bookings.push(booking);
  

  res.send(booking);
});

apiRouter.get('/bookings', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (!user.tutorId) {
    res.status(403).send({ msg: 'Only tutors can see bookings' });
    return;
  }
  res.send(bookings.filter((b) => b.tutorId === user.tutorId));
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



async function createUser(email, password, firstName, lastName) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    firstName: firstName,
    lastName: lastName,
    tutorId: email === TUTOR_EMAIL ? 1 : null,

    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

