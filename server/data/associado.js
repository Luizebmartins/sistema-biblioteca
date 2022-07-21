const associado = require('../models/associado')


exports.salvarAssociado = function (novoAssoc) {
	return associado.create(novoAssoc, { raw: true })
}

exports.buscarPorCodigo = function (codigo) {
	return associado.findOne({ where: { codigo }, raw: true })
}