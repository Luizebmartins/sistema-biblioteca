const publicacaoData = require('../data/publicacao')

exports.salvarPublicacao = async function (data) {
	const novaPublic = data
	return publicacaoData.salvarPublicacao(novaPublic)
}

exports.buscarPublicacoes = async function (data) {
	return publicacaoData.buscarPublicacoes()
}