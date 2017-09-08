app.get('/engineer',function(req,res){
  db.all('SELECT rowid AS id,name From engineer',function(err,rows){
    if(err){
      res.send('err: '+err)
    }else {
      console.log(rows)
      res.render({title:'Halaman Engineer',users:rows
    })
    }
  })
})
app.post('/engineer',function(req,res){
  db.run('INSERT INTO engineer VALUES ($name),($email)',
  {$name:req.body.name},
  {$email:req.body.email})
    function(err,rows){
    if(err){
      res.send('err: '+err)
    }else {
      console.log(rows)
      res.render({title:'Halaman Engineer',data:rows
    })
  })
  })
}
