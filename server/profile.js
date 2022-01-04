const express = require('express');
const pool = require("./db");

const router = express.Router();

const users = [
    {
        username:""
    }
]

router.get("/", async(req, res) => {
    try {
        // const {id} = req.params;
        const id = req.user.name; 
        const resident = await pool.query("SELECT * FROM hostel_resident WHERE enrollment_no = $1", [id]);
        res.json(resident.rows);
        
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;