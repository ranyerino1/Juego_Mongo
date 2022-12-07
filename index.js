const express = require('express')
const consola = require('child_process')
const app = express()
const port = 4000

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.set('views',__dirname + '/views')

function abirirConsola(){
  consola.spawn('cmd',['/c', 'start c:\\mongosh-1.6.0-win32-x64\\bin\\mongosh'])
}

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

app.get('/consola', (req,res)=>{
  res.render('consola', abirirConsola())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

