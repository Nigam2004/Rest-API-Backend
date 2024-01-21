const multer = require("multer");
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

module.exports = upload;
