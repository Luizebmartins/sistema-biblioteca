const publicacaoData = require('../data/publicacao')

exports.salvarPublicacao = async function (data) {
	const novaPublic = data
	return publicacaoData.salvarPublicacao(novaPublic)
}