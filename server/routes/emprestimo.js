const express = require('express')
const emprestimoService = require('../service/emprestimo')

const router = express.Router()


// Criar funcionários
router.post('/emprestimos', async (req, res, next) => {
	const data = req.body
	try {
		const novoEmprest = await emprestimoService.salvarEmprestimo(data)
		
		res.status(201).json(novoEmprest)
	} catch (e) {
		res.status(400).json({error: e})

	}
})

router.post('/devolverExemplar', async (req, res, next) => {
	try {
		const multa = await emprestimoService.devolverExemplar(req.body)
		res.status(200).json(multa)
	} catch (e) {
		res.status(400).json({error: e})

	}
})

router.get('/emprestimosAtrasados', async (req, res, next) => {
	try {
		const emprestimosAtrasados = await emprestimoService.buscarAtrasados()
		res.status(200).json(emprestimosAtrasados)
	} catch (e) {
		res.status(400).json({error: e})

	}
})

module.exports = router
