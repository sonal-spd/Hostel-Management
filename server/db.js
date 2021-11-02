const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ruv@3012",
    host: "localhost",
    port: 5432,
    database: "hostel"
});

module.exports = pool;