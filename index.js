const user = require("./Router/User");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();
const connection = require("./Utils/DbConnect");
const express = require("express");
connection();
const app = express();
app.use(express.json());
app.use("/api/user", user);

app.use(errorHandler);
app.listen(process.env.APP_PORT, () => {
  console.log("app listening oon posrt 4000");
});
