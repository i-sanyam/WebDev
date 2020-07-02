const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017";
const DB_NAME = "testdb";

// Use connect method to connect to the server
(async function () {
  const client = await MongoClient.connect(URL);
  console.log("Connected successfully to server");

  const db = client.db(DB_NAME);
  const collection = db.collection("testtable");
  const todos = await collection.find({}).toArray();
  todos.forEach((element) => {
    console.log(JSON.stringify(element));
  });

  client.close();
})();
