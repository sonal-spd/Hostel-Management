const express = require('express');
const pool = require("../../server/db.js");

const router = express.Router();

router.get("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const resident = await pool.query("SELECT * FROM hostel_resident WHERE enrollment_no = $1", [id]);
        res.json(resident.rows);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;