const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gabdatabase75:database13001@cluster0.v5mdbun.mongodb.net/weatherapp";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
