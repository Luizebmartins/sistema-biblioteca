const emprestimo = require('../models/emprestimo')


exports.salvarEmprestimo = function (novoEmprest) {
	return emprestimo.create(novoEmprest, { raw: true })
}

exports.buscarEmprestimos = function (isbn) {
    return emprestimo.findAll({ where: { isbn }, raw: true })
}

exports.buscarTodosEmprestimos = function () {
    return emprestimo.findAll({ raw: true })
}

exports.buscarEmprestimo = function (isbn, nro_exemplar, codigo_assoc) {
    return emprestimo.findOne({ where: { isbn, codigo_assoc, nro_exemplar }, raw: true })
}

exports.removerEmprestimo = function (codigo) {
    return emprestimo.destroy({ where: {codigo}})
}

