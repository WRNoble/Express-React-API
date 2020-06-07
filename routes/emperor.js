const express = require('express');
const emperorController = require('../constrollers/emperor');
const router = express.Router();

router.get('/', emperorController.index);
router.get('/name/:name', emperorController.showName);
router.post('/', emperorController.create);
router.put('/name/:name', emperorController.edit);
router.delete('/name/:name', emperorController.delete);

module.exports = router;