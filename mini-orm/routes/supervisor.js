

app.get('/engineer',function(req,res){
  db.all('SELECT rowid AS id,name From supervisor',function(err,rows){
    if(err){
      res.send('err: '+err)
    }else {
      console.log(rows)
      res.render('show'{title:'Halaman Supervisor',users:rows
    })
    }
  })
})
app.post('/engineer',function(req,res){
  db.run('INSERT INTO supervisor VALUES ($name),($email)',
  {$name:req.body.name},
  {$email:req.body.email}
    function(err,rows){
    if(err){
      res.send('err: '+err)
    }else {
      console.log(rows)
      res.render('show'{title:'Halaman supervisor',data:rows
    })
    }
  })
})
