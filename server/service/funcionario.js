const funcionarioData = require('../data/funcionario')
const jwt = require('jsonwebtoken')
require('dotenv').config()



exports.salvarFuncionario = async function (data) {
	const novoFunc = data
	return funcionarioData.salvarFuncionario(novoFunc)
}

exports.loginFuncionario = async function (data) {
	const funcionario = await funcionarioData.buscarFuncionarioPorEmail(data.email)
	if (!funcionario) throw new Error('Falha no login')

	if (data.senha !== funcionario.senha) throw new Error('Falha no login')

	const token = jwt.sign({
		codigo: funcionario.codigo,
		email: funcionario.email,
		funcao: funcionario.funcao,
	}, process.env.JWT_KEY, {
		expiresIn: '1d',
	})

	return token
}
