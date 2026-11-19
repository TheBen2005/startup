const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('benstutors');
const userCollection = db.collection('user');
const tutorCollection = db.collection('tutor');

const tutor_one = { id: 1, name: 'Ben', score: 1390, test: 'SAT', image: '/suitimage.jpg', days: [{ id: 1, day: 'Wed', date: 28, title: 'Wednesday, October 28', times: ['9:00 AM', '1:00 PM', '2:00 PM', '6:00 PM'] }] };
const tutor_two = { id: 2, name: 'Matt', score: 34, test: 'ACT', image: '/suitimage.jpg', days: [{ id: 2, day: 'Thu', date: 29, title: 'Thursday, October 29', times: ['9:00 AM', '10:00 AM', '1:00 PM', '4:00 PM'] }] };

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
    await seedTutors();
  } catch (ex) {
    console.log(`Unable to connect to database because ${ex.message}`);
    process.exit(1);
  }
})();

async function seedTutors() {
  const count = await tutorCollection.countDocuments();
  if (count === 0) {
    await tutorCollection.insertMany([tutor_one, tutor_two]);
    console.log('Seeded tutors');
  }
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}
function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}
async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({ email: user.email }, { $unset: { token: 1 } });
}
async function getTutor(tutorId) {
    return tutorCollection.findOne({ id: Number(tutorId) });
}
async function getTutorbyName(name) {
    return tutorCollection.findOne({ name: name });
}
async function updateTutorDays(days){
    
}

module.exports = {
  updateUser,
  addUser,
  getUser,
  getUserByToken,
  updateUserRemoveAuth,
  getTutor,
  getTutorbyName,
  updateTutorDays
};
