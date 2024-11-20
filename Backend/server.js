const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const pool = require('./config/db')
const authRoutes = require('./routes/AuthRoutes')
const ecoPontoRoutes = require('./routes/EcoPontoRoutes')
const materialDataRoutes = require('./routes/MaterialDataRoutes')
PORT = process.env.PORT
app.use(cors())
app.use(express.json())



//Rotas de Login Cadastro e Autenticação
app.use('/auth', authRoutes)

//Rotas de manipulação dos EcoPontos para  vizualicação no mapa e cadastro de novos pontos
app.use('/ecoponto', ecoPontoRoutes)

//Rotas de manipulação dos dados de coleta, registrar coleta, apagar e demonstrar dados de coleta 
app.use('/materiais', materialDataRoutes)



    
    
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})