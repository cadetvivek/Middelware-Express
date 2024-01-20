const express = require('express')
const app = express()
//app.set('view engine','ejs')

app.use(function(req, res,next)  {
    console.log('hello form middeware')
    next();
  })

  app.use(function(req,res,next){
    console.log("hello form middleware 2")
  })

app.get('/', function(req, res)  {
  res.send('hellow vivek kushwah')
})

app.listen(4000);
