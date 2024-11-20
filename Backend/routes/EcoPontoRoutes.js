const express = require('express');
const router = express.Router();
const ecoPonto = require(`../controllers/EcoPontosController`)

router.post('/cadastro/ecopontos', ecoPonto.registerEcoPonto)
router.get('/pesquisa/:cep/:raio', ecoPonto.findNearbyEcoPonto)

module.exports = router