const funcionarioData = require('../data/funcionario')

exports.salvarExemplar = async function (data) {
	const novoFunc = data
	return funcionarioData.salvarExemplar(novoFunc)
}