const funcionarioData = require('../data/funcionario')

exports.salvarFuncionario = async function (data) {
	const novoFunc = data
	return funcionarioData.salvarFuncionario(novoFunc)
}