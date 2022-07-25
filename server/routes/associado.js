const express = require('express')
const associadoService = require('../service/associado')

const router = express.Router()


// Criar Associados
router.post('/associados', async (req, res, next) => {
	const data = req.body
	try {
		const novoAssoc = await associadoService.salvarAssociado(data)
		
		res.status(201).json(novoAssoc)
	} catch (e) {
		res.status(400).json({error: e})

	}
})

router.get('/associados', async (req, res, next) => {
	try {
		const associados = await associadoService.consultarAssociados()

		res.status(201).json(associados)
	} catch (e) {
		res.status(400).send("Assoaciados não encontrados")

	}
})


module.exports = router
