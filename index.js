const express = require('express')
const app = express()
const port = 4000

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.set('views',__dirname + '/views')

app.get('/', (req,res)=>{
  res.render('inicio')
})

app.get('/instrucciones', (req,res)=>{
  res.render('instrucciones')
})

app.get('/principiante', (req,res)=>{
  res.render('principiante')
})

app.get('/intermedio', (req,res)=>{
  res.render('intermedio')
})

app.get('/avanzado', (req,res)=>{
  res.render('avanzado')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

