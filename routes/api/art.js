const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/art');

// POST /api/art
router.post('/', artCtrl.create)
router.get('/', artCtrl.index)
router.delete('/:id', artCtrl.delete)
router.put("update/:id", artCtrl.update)

module.exports = router;