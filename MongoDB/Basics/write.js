const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017";
const DB_NAME = "testdb";

// Use connect method to connect to the server
(async function () {
  const client = await MongoClient.connect(URL);
  const todo = { name: "kida", you: "hor ds", priority: 2 };
  const todos = [
    { name: "kida", you: "hor ds", priority: 2 },
    { don: "random", complete: "no" },
  ];
  console.log("Connected successfully to server");

  const db = client.db(DB_NAME);
  const table = db.collection("testtable");
  const result = await table.insertMany(todos);
  console.log(result);

  client.close();
})();
