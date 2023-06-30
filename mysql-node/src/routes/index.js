const express = require('express');
const router = express.Router();

const {create,select,borrar} = require('../controllers/index');

router.get('/', select);
router.post('/', create);
router.delete('/:id', borrar);


module.exports = router;
