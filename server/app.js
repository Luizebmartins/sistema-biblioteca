const express = require('express')

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Aplicação Biblioteca!')
})
  

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
})