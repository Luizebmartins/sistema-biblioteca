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

router.post('/funcionarios/login/', async (req, res, next) => {
	const data = req.body
	try {
		const token = await funcionarioService.loginFuncionario(data)
		res.status(200).json(token)
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
