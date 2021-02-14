const express = require('express');
const app = express();






app.get('/',function (req,res) {

    res.send ('Express');
    
})

app.get('/a',function (req,res) {

    res.send ('Express');
})

app.get('/b',function (req,res) {

    res.send ('Express');
})








app.listen(5005,()=>{
    console.log("server is running on port 5005");
})