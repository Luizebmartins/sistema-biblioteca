const exemplar = require('../models/exemplar')


exports.salvarExemplar = function (novoExemp) {
	return exemplar.create(novoExemp, { raw: true })
}
