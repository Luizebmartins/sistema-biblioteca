const publicacao = require('../models/publicacao')


exports.salvarPublicacao = function (novaPublic) {
	return publicacao.create(novaPublic, { raw: true })
}


exports.buscarPublicacoes = function () {
	return publicacao.findAll({ raw: true })
}
