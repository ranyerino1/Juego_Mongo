const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', require('./router/rutas_web'));
app.use('/paginaPrincipal', require('./router/paginaPrincipal'));

app.use('/referencias', require('./router/rutas_web'));
app.use('/referencias', require('./router/referencias'));

app.use('/metas', require('./router/rutas_web'));
app.use('/metas', require('./router/metas'));

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`Puerto ejecutandose correctamente ${port} ✅✅✅`)
})