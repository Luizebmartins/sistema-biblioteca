const express = require('express')
const funcionarioService = require('../service/funcionario')

const router = express.Router()


// Criar funcionários
router.post('/funcionarios', async (req, res, next) => {
	const data = req.body
	try {
		const novoFunc = await funcionarioService.salvarFuncionario(data)
		
		res.status(201).json(novoFunc)
	} catch (e) {
		next(e)
	}
})



module.exports = router
