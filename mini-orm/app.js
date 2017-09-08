const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');
const express= require('express')
const app = express()
app.set('view engine','ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
let engineer=require ('./routes/engineer')
let supervisor= require('./routes/supervisor')
app.use('/supervisor',supervisor)
app.use('/engineer',engineer)
app.listen(8001, function(){
  console.log('Example app listening on port 8001!')
})

module.exports = router;
