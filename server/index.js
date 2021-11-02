const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const noticeApi = require("./routes/notice");
const complainApi = require("./routes/complain");
const leaveApi = require("./routes/leave");
const facultyApi = require("./routes/faculty");
const profileApi = require("./routes/profile");
const attendanceApi = require("./routes/attendance");

app.use('/notice', noticeApi);
app.use('/complain', complainApi);
app.use('/leave', leaveApi);
app.use('/faculty', facultyApi);
app.use('/profile', profileApi);
app.use('/attendance', attendanceApi);

app.get('/', (req, res) => {
    res.send('<h2> API req <>');
})


app.listen(5000, ()=>{
    console.log("listening 5000")
});