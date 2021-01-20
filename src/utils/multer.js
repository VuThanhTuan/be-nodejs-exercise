const multer = require('multer');
const ip = require('ip');
const maxSize = 1 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/public/images')
  },
  filename: function (req, file, cb) {
    if (file.fieldname == "file") {
      req.body.avatar = req.protocol + '://' + req.get('host') + '/images/' + file.originalname
    } else {
      if (!req.images || !req.images.length) {
        req.images = [req.protocol + '://' + req.get('host') + '/images/' + file.originalname]
      } else {
        req.images.push(req.protocol + '://' + req.get('host') + '/images/' + file.originalname)
      }
    }
    cb(null, file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  let match = ["image/png", "image/jpeg", "image/jpg"];
  if (match.indexOf(file.mimetype) === -1) {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  } else {
    cb(null, true);
  }
}

const upload = multer({
  storage: storage, limits: { fileSize: maxSize }, fileFilter: fileFilter
})
export default upload