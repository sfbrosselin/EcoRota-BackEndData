const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool ({
    user: "postgres",
    password: "postgres",
    host: "my-postgres",
    port: 5433,
    database: "postgres"

})

module.exports = pool