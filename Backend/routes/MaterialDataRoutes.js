const express = require('express');
const router = express.Router();
const dataController = require('../controllers/DataController')


// Rotas de manipulação de dados de coleta do usuário
router.get('/profile/:email', dataController.getUserMaterialsData)
router.post('/coletas/cadastro/:email', dataController.registerUserMaterialsData)
router.post('/coletas/apagar/:email', dataController.eraseUserMaterialsData)

module.exports = router