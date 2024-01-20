const user = require("./Router/User");
const errorHandler = require("./Middlewares/errorHandler");
require("dotenv").config();
const connection = require("./Utils/DbConnect");
const express = require("express");
connection();
const app = express();
app.use(express.json());
const cloudinaryUploder = require("./services/cloudinary");
const files = require("./Models/File");
const multer = require("multer");
const { date } = require("joi");
const upload = multer({
  storage: multer.diskStorage({
    // destination: function (req, file, cb) {
    //   // console.log(req);
    //   // console.log(file);
    //   cb(null, "upload");
    // },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("file");

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
