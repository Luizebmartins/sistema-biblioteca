const associado = require('../models/associado')


exports.salvarAssociado = function (novoAssoc) {
	return associado.create(novoAssoc, { raw: true })
}
