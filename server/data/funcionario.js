const funcionario = require('../models/funcionario')


exports.salvarFuncionario = function (novoFunc) {
	return funcionario.create(novoFunc, { raw: true })
}
