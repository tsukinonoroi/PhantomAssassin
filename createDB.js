var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("phantomassassin");
database.dropDatabase()
database = client.db("phantomassassin");
const heroes = database.collection("heroes");
const result = await heroes.insertOne({name:"Фантомка"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
