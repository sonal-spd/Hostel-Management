const express = require('express');
const pool = require("../../server/db.js");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const allNotices = await pool.query("SELECT * FROM notice");
        res.json(allNotices.rows);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;