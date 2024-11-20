const pool = require('../config/db')

exports.registerEcoPonto = async (req, res) => {
    const { name, materiais, address, telefone, cep, lon, lat } = req.body
    try{
        const ecoponto = await pool.query(`INSERT INTO ecopontos (name, materiais, address, telefone, cep, geom) VALUES ('${name}', '${materiais}', '${address}', ${telefone}, ${cep}, ST_MakePoint(${lon}, ${lat}))`)
        
        
    }catch(err){
        console.error(err)
    }
}

exports.findNearbyEcoPonto = async(req, res) => {
    const cep = req.params.cep
    const raio = req.params.raio
    try{
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        
        const apiData = await response.json()
        if(!apiData){
            console.log(`Deu erro no if do APIDATA`)
        }else{
            const lat = apiData.lat
            const lng = apiData.lng
            const getPontos = await pool.query(`SELECT eco_id, name, address, materiais, ST_X (ST_Transform (geom, 4326)) AS lng,
       ST_Y (ST_Transform (geom, 4326)) AS lat FROM ecopontos WHERE ST_DWithin(geom::geography, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,  ${raio*1300})`)
            res.json({ 'data' : getPontos.rows })
            
        }
        
    }catch(err){
            console.error(err)
        }
    }