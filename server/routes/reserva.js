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
		next(e)
	}
})

router.get('/reservas/:isbn', async (req, res, next) => {
	try {
		const reservas = await reservaService.buscarReservasPorIsbn(req.params.isbn)
		
		res.status(201).json(reservas)
	} catch (e) {
		next(e)
	}
})

module.exports = router
