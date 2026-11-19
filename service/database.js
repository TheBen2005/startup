const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const userCollection = db.collection('user');
const tutorCollection = db.collection('tutor');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

const tutor_one = { id: 1, name: 'Ben', score: 1390, test: 'SAT', image: '/suitimage.jpg', days: [{ id: 1, day: 'Wed', date: 28, title: 'Wednesday, October 28', times: ['9:00 AM', '1:00 PM', '2:00 PM', '6:00 PM'] }] };
const tutor_two = { id: 2, name: 'Matt', score: 34, test: 'ACT', image: '/suitimage.jpg', days: [{ id: 2, day: 'Thu', date: 29, title: 'Thursday, October 29', times: ['9:00 AM', '10:00 AM', '1:00 PM', '4:00 PM'] }] };
tutorCollection.insertMany([tutor_one, tutor_two]);

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
