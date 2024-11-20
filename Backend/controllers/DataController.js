const pool = require('../config/db')

exports.getUserMaterialsData = async (req, res) => {
    const profile_email = req.params.email
    try{
        const data = await pool.query('SELECT qntplastico, qntvidro, qntpapel, qntmetal FROM userprofile WHERE profile_email = $1', [profile_email])
        res.json({ data:data.rows[0]})
    }catch(err){
        console.error(err)
    }
}

exports.registerUserMaterialsData = async(req, res) => {
    const profile_email = req.params.email
    const { papel, plastico, metal, vidro } = req.body
    try{
        const data = await pool.query(`INSERT INTO userprofile (profile_email, qntplastico, qntvidro, qntpapel, qntmetal)
                                        VALUES ('${profile_email}', ${Number(plastico)}, ${Number(vidro)}, ${Number(papel)}, ${Number(metal)})
                                        ON CONFLICT (profile_email)
                                        DO UPDATE SET profile_email = excluded.profile_email , qntplastico = userprofile.qntplastico+${Number(plastico)} , qntvidro =  userprofile.qntvidro + ${Number(vidro)}, qntpapel = userprofile.qntpapel + ${Number(papel)}, qntmetal= userprofile.qntmetal + ${Number(metal)};`)
        res.status(201).json({ message: 'Coleta feita com sucesso', status: 201})
    }catch(err){
        console.error(err)
    }
}

exports.eraseUserMaterialsData = async (req, res) => {

    const profile_email = req.params.email
    try{
        const erase = await pool.query(`DELETE from userprofile WHERE profile_email = '${profile_email}'`)
        res.status(201).json({'responseStatus' : 201})
    }catch(err){
        console.error(err)
    }
}