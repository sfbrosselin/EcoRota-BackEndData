const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController')

//Rotas de autenticação
router.post('/signup', authController.register)
router.post('/login', authController.login)

module.exports = router

