const associadoData = require('../data/associado')

exports.salvarAssociado = async function (data) {
	const novoAssoc = data
	return associadoData.salvarAssociado(novoAssoc)
}

exports.consultarAssociados = async function () {
	return associadoData.consultarAssociados()
}
