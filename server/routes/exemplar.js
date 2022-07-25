const express = require('express')
const exemplarService = require('../service/exemplar')

const router = express.Router()


// Criar funcionários
router.post('/exemplares', async (req, res, next) => {
	const data = req.body
	try {
		const novoExemp = await exemplarService.salvarPublicacao(data)
		
		res.status(201).json(novoExemp)
	} catch (e) {
		res.status(400)
	}
})

// Busca exemplares através do isbn
router.get('/exemplares/:isbn', async (req, res, next) => {
	try {
		const exemplares = await exemplarService.buscaExemplares(req.params.isbn)
		res.status(200).json(exemplares)
	} catch (e) {
		res.status(400)
	}
})

router.get('/exemplaresDisponiveis/:isbn', async (req, res, next) => {
	try {
		const exemplares = await exemplarService.buscaExemplaresDisponiveis(req.params.isbn)
		res.status(200).json(exemplares)
	} catch (e) {
		res.status(400)
	}
})


module.exports = router
