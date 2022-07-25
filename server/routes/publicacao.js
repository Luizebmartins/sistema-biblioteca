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
		res.status(400).json({error: e})

	}
})

router.get('/publicacoes', async (req, res, next) => {
	try {
		const publicacoes = await publicacaoService.buscarPublicacoes()
		
		res.status(201).json(publicacoes)
	} catch (e) {
		res.status(400).send("Publicações não encontradas")

	}
})



module.exports = router
