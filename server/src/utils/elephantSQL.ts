const config = require("./config");
const pg = require("pg");
const connectionString = `${config.DATABASE_URL}`; // Can be found in the Details page
const client = new pg.Client(connectionString);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database");
  } catch (err) {
    console.error("Error running query", err);
    serviceFunction("Could not connect to PostgreSQL database");
  } finally {
    client.end();
  }
};

// Change console.log to use a logging function later
function serviceFunction(message) {
  console.log(message);
}
