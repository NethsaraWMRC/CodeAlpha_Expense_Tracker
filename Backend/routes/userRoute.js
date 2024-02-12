const express = require('express');
const multer = require('multer');
const { updateUser } = require('../controllers/userUpdateController');
const { getUser, getOneUser } = require('../controllers/userGetController')

const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.get('/',  getUser);
router.get('/:id',  getOneUser);
router.put('/:id', upload.single('proPic'), updateUser)

module.exports = router;
