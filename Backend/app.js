// pass = u5Q8ziPqz60P2j8J
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Route/userRoutes");


const app = express();

//Middleware
app.use(express.json());
app.use("/Users",router);


mongoose.connect("mongodb+srv://admin:u5Q8ziPqz60P2j8J@cluster0.x6ix3.mongodb.net/")
.then(()=> console.log("connect to mongodb"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));