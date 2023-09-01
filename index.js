const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require("./Config/db.js")
const mongoose = require("mongoose")
const post_route = require('./Routes/postRoute.js');

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use('/api',post_route);

app.listen(8080,()=>{
    console.log('server started')
})