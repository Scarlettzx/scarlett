const express = require('express');
const app = express();
const morgan = require('morgan')
const chalk = require('Chalk');
const debug = require('debug')('index');

app.use(morgan('dev'))
app.get("/", (req,res)=>{
    res.send('Hello Worlddddsads');
})

const port = 3000;
app.listen(port, ()=>{
    debug(`Server is running on Port ${chalk.blue(port)}`) 
})