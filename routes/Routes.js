const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('inicio')
})

router.get('/instrucciones', (req,res)=>{
    res.render('instrucciones')
})

router.get('/principiante', (req,res)=>{
    res.render('principiante')
})

router.get('/intermedio', (req,res)=>{
    res.render('intermedio')
})

router.get('/avanzado', (req,res)=>{
    res.render('avanzado')
})