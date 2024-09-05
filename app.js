import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';
import express from 'express';

const app = express();


import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url); //takes the name of path to the app.js file
const dirName = dirname(fileName); // takes the name of path to directory of the app.js file


// the url needs to have one argument to the 'file' parameter
app.param(['file'], function (req, res, next, value) {
    next()
  })


// if no arguments given, the website will open the index.html file by default
app.get('/', function (req, res) {
    res.send("nothing given")
  })

// if there is an argument given, the file specified will open,
// if the file is not found, the website will say "File not found"
app.get('/:file/', function (req, res) {

    // takes the path given on the url
    let file = req.params.file

    // takes the extension of the given file on the url
    let fileExtension = path.extname(file);
    // console.log("File Name:"+file);
    // console.log("extension of file:" +fileExtension);

    // the file specified in the path will be sent
    res.sendFile(dirName+"/"+file, function(err){
        // "File not found" will display on the website if the file is not in the repo
        if(err){
            res.send("File not found")
        }
    });
  })
  
  
app.listen(3000, function (req,res) {
    console.log("Server is running on localhost:3000 ");
});
