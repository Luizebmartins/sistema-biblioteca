const exemplarData = require('../data/exemplar')
const emprestimoData = require('../data/emprestimo')

exports.salvarPublicacao = async function (data) {
	const novoExemp = data
	return exemplarData.salvarExemplar(novoExemp)
}

exports.buscaExemplares = async function (isbn) {
	return exemplarData.buscaExemplarPorIsbn(isbn)
}


exports.buscaExemplaresDisponiveis = async function (isbn) {
	const exemplares =  await exemplarData.buscaExemplarPorIsbn(isbn)
	const emprestimos = await emprestimoData.buscarEmprestimos(isbn)

	let exemplarLivre = []
	exemplares.forEach(exemplar => {
		let check = true
		emprestimos.forEach(emprestimo => {
			if(exemplar.numero === emprestimo.nro_exemplar) {
				check = false
			}
		})
		if(check) {
			exemplarLivre.push(exemplar)
		}
	})

	return exemplarLivre
}

