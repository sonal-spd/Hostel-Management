const Pool = require("pg").Pool;

const pool = new Pool({
    user: "enjtgsgqhcdlyo",
    password: "9c105ca6cbc2e7787116659e3d2dc81e6c80065417838cdd0d1f2fff7605b629",
    host: "ec2-50-17-171-127.compute-1.amazonaws.com",
    port: 5432,
    database: "d9f4b5i8reiigr"
});

module.exports = pool;


// psql --host=ec2-50-17-171-127.compute-1.amazonaws.com  --port=5432  --username=enjtgsgqhcdlyo  --password --dbname=d9f4b5i8reiigr
