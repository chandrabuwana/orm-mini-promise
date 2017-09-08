const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS supervisor (id INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR(200), email VARCHAR(200))`,() => {
    console.log('Create Table Siswa Berhasil');
  })

  db.run(`CREATE TABLE IF NOT EXISTS engineer(id INTEGER PRIMARY KEY AUTOINCREMENT,nama VARCHAR(200,email VARCHAR (200)))`,()=>{
    console.log('Create Table Engineer BERHASIL');
  })


})
db.close()
