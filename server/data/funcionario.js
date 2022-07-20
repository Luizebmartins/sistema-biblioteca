const funcionario = require('../models/funcionario')


exports.salvarExemplar = function (novoFunc) {
	return funcionario.create(novoFunc, { raw: true })
}
