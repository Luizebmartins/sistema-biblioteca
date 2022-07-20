const funcionarioData = require('../data/funcionario')

exports.salvarAssociado = async function (data) {
	const novoFunc = data
	return funcionarioData.salvarFuncionario(novoFunc)
}