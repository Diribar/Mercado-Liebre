const express = require('express')
const app = express()
let path = require('path')

app.listen(3030, () => console.log('Servidor funcionando'))
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})