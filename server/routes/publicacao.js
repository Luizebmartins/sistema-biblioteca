const express = require('express')
const publicacaoService = require('../service/publicacao')

const router = express.Router()


// Criar Publicações
router.post('/publicacoes', async (req, res, next) => {
	const data = req.body
	try {
		const novaPublic = await publicacaoService.salvarPublicacao(data)
		
		res.status(201).json(novaPublic)
	} catch (e) {
		next(e)
	}
})



module.exports = router
