const user = require("./Router/User");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();
const connection = require("./Utils/DbConnect");
connection();
const express = require("express");
const app = express();
app.use(express.json());
const cloudinaryUploder = require("./services/cloudinary");
const upload = require("./Middlewares/multer");
const files = require("./Models/File");

app.use("/api/user", user);
app.post("/upload-file", upload, async (req, res) => {
  const cfile = await cloudinaryUploder(req.file.path);
  const file = new files({ link: cfile.secure_url });
  const result = await file.save();
  res.send({ success: true, message: "file uploaded", result });
});

app.use(errorHandler);
// console.log(app);
app.listen(process.env.APP_PORT, () => {
  console.log("app listening oon posrt 4000");
});
