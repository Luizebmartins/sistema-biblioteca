const exemplar = require('../models/exemplar')


exports.salvarExemplar = function (novoExemp) {
	return exemplar.create(novoExemp, { raw: true })
}

exports.buscaExemplarPorIsbn = function (isbn) {
	return exemplar.findAll({ where: { isbn } })
}