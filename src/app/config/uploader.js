const multer = require('multer');
const config = require('./index');

const upload = multer({ dest: config.UPLOAD_DIR })

module.exports = upload
