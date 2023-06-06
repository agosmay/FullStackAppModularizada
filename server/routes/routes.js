const express = require('express');
const router = express.Router();

const { INICIAL , NUEVOS, OTROS, PERSONAS, PERROS } =  require('../controllers/controllers');

router.get('/api/data', INICIAL);
router.get('/api/new', NUEVOS);
router.get('/api/otros', OTROS);
router.get('/api/personas', PERSONAS);
router.get('/api/perros', PERROS);

module.exports= router;