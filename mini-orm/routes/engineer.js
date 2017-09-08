const express=require('express')
const router=express.Router()
const sqlite3 = require("sqlite3").verbose();
let require =('../models/engineer')

db.run("INSERT INTO engineer(engineer)"+)


db.all('SELECT * FROM engineer', function(err,rows){
  if(err !=null){
    console.log(err)
    callback(err)
  }

})
module.exports = router;
