const express = require('express');
const multer = require('multer');
const { updateUser } = require('../controllers/userUpdateController');
const { getUser, getOneUser } = require('../controllers/userGetController')

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

//upload.single('proPic')

router.get('/',  getUser);
router.get('/:id',  getOneUser);
router.put('/:id', updateUser)

module.exports = router;
