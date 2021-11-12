const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function authenticateToken(req, res, next){
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
const posts = [
    {
        username: "kylie",
        title: "post1"
    },
    {
        username: "kole",
        title: "post2"
    },
    
]
const users = [];

const noticeApi = require("./notice");
const complainApi = require("./complain");
const leaveApi = require("./leave");
const facultyApi = require("./faculty");
const profileApi = require("./profile");
const attendanceApi = require("./attendance");

app.use('/api/notice', authenticateToken,noticeApi);
app.use('/api/complain', authenticateToken,complainApi);
app.use('/api/leave', authenticateToken,leaveApi);
app.use('/api/faculty', authenticateToken,facultyApi);
app.use('/api/profile', authenticateToken,profileApi);
app.use('/api/attendance', authenticateToken,attendanceApi);

app.get('/api/users',  (req, res) => {
    res.json(users);
})
app.get('/api/posts', authenticateToken, (req, res) => {
    console.log(posts);
    res.json(posts.filter(post => post.username === req.user.name))
});

app.post('/api/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {name: req.body.name, password : hashedPassword }
        users.push(user);
        res.json(user).status(201);
        
    } catch (error) {
        res.json("error").status(500);
    }
})

app.post('/api/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if(user == null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)){
            const userData = {name:req.body.name};

            const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET)
            res.json({accessToken: accessToken});
        }else{
            // res.json(user); 
            res.send('Not Allowed');
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(PORT, ()=>{
    console.log(`listening ${PORT}`);
});
