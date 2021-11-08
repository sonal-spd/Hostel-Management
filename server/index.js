const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "Hostel-Management/build")));
}

const noticeApi = require("../pages/api/notice");
const complainApi = require("../pages/api/complain");
const leaveApi = require("../pages/api/leave");
const facultyApi = require("../pages/api/faculty");
const profileApi = require("../pages/api/profile");
const attendanceApi = require("../pages/api/attendance");

app.use('/api/notice', noticeApi);
app.use('/api/complain', complainApi);
app.use('/api/leave', leaveApi);
app.use('/api/faculty', facultyApi);
app.use('/api/profile', profileApi);
app.use('/api/attendance', attendanceApi);


app.listen(PORT, ()=>{
    console.log(`listening ${PORT}`);
});
