const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/')
  },
  filename: function (req, file, cb) {
    if (!req.images || !req.images.length) {
      req.images = [file.originalname]
    } else {
      req.images.push(file.originalname)
    }


    
    cb(null, file.originalname)

  }
})
const fileFilter = (req, file, cb) => {
  let match = ["image/png", "image/jpeg", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
        cb(null, false);
    } else {
        cb(null, true);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter})

export default upload