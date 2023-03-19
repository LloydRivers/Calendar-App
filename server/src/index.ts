const express = require("express");
const app = express();

const { connectToDatabase } = require("./utils/elephantSQL");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});
