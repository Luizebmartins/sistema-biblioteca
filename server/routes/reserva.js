const express = require('express')
const reservaService = require('../service/reserva')

const router = express.Router()


// Criar funcionários
router.post('/reservas', async (req, res, next) => {
	const data = req.body
	try {
		const novaReserv = await reservaService.salvarReserva(data)
		
		res.status(201).json(novaReserv)
	} catch (e) {
		res.send(e)
	}
})

router.get('/reservas/:isbn', async (req, res, next) => {
	try {
		const reservas = await reservaService.buscarReservasPorIsbn(req.params.isbn)
		
		res.status(201).json(reservas)
	} catch (e) {
		res.send(e)
	}
})

router.put('/anularReserva', async (req, res, next) => {
	try {
		await reservaService.anularReserva(req.body)
		
		res.status(201).send("reserva anulada")
	} catch (e) {
		res.send(e)
	}
})

module.exports = router
