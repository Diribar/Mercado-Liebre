const express = require('express')
const app = express()
let path = require('path')

app.listen(3000, () => console.log('Servidor funcionando...'))
app.use(express.static(path.resolve('public')));

/* HOME */      app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, 'views/home.html'))})
/* REGISTER */  app.get('/register', (req, res) => {res.sendFile(path.resolve(__dirname, 'views/home-register.html'))})
/* LOGIN */  app.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname, 'views/home-login.html'))})
