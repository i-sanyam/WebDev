const { MongoClient } = require("mongodb");
const URL = "mongodb://localhost:27017";
const DB_NAME = "testdb";

(async function () {
  const client = await MongoClient.connect(URL);
  const testdb = client.db(DB_NAME);
  console.log("connection successful");
  console.log(testdb);
})();
