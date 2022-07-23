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

	delete funcionario.senha
	console.log(funcionario)
	return funcionario
}
