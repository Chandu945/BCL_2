const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// configuring environmental variables
dotenv.config();

const port = process.env.PORT || 8080;
const db_url = process.env.DATABASE_URL;
const con = process.env.NODE_ENV;

mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"));

app.listen(port, () => console.log(`Server is running on port: ${port}......`));
