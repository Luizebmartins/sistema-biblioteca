const publicacao = require('../models/publicacao')


exports.salvarPublicacao = function (novaPublic) {
	return publicacao.create(novaPublic, { raw: true })
}
