const express = require('express')

const app = express()

app.use(express.json())
app.use('/', require('./routes/funcionario'))
app.use('/', require('./routes/associado'))
app.use('/', require('./routes/exemplar'))
app.use('/', require('./routes/publicacao'))
app.use('/', require('./routes/reserva'))
app.use('/', require('./routes/emprestimo'))







app.get('/', (req, res) => {
    res.send('Aplicação Biblioteca!')
})
  

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
})