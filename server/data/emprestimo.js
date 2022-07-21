const emprestimo = require('../models/emprestimo')


exports.salvarEmprestimo = function (novoEmprest) {
	return emprestimo.create(novoEmprest, { raw: true })
}