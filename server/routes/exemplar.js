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
		next(e)
	}
})



module.exports = router
