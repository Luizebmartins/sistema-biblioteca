const emprestimo = require('../models/emprestimo')


exports.salvarEmprestimo = function (novoEmprest) {
	return emprestimo.create(novoEmprest, { raw: true })
}

exports.buscarEmprestimos = function (isbn) {
    return emprestimo.findAll({ where: { isbn }, raw: true })
}