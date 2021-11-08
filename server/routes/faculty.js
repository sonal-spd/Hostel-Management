const express = require('express');
const pool = require("../../server/db.js");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const proctors = await pool.query("SELECT * FROM proctor_team");
        res.json(proctors.rows);
    } catch (error) {
        console.log(error.message);
    }
});

router.get("/staff", async(req, res) => {
    try {
        const facultyStaffs = await pool.query("SELECT * FROM faculty");
        res.json(facultyStaffs.rows);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;