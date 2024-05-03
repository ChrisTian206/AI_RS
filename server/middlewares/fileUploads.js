import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets');
    }
    ,
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Retain the original file name
    }
});

const upload = multer({ storage: storage });


export default upload 