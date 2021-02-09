#!/usr/bin/env node

require('./config');
const express = require('express');
const compression = require('compression');
const Engine = require('./engine');

const app = express();
app.use(compression())

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

//WEB route
app.use('/', require('./routes/index'));

let port = process.env.PORT || 8080;
app.listen(port, async ()=>{
  await Engine.start();
    console.log(`\n Server running at port: ${port}`);
})

process.on("uncaughtException", (err) => {
    console.log(`Uncaught: ${err.message}`);
    process.exit(1);
  });
  
  // Handle unhandled promice rejections
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  });