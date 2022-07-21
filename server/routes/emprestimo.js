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
		console.log(e)
	}
})



module.exports = router
