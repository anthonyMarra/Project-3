const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/art');

// POST /api/art
router.post('/', artCtrl.create);
router.get('/', artCtrl.index);

module.exports = router;