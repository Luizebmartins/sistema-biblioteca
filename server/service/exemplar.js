const exemplarData = require('../data/exemplar')

exports.salvarPublicacao = async function (data) {
	const novoExemp = data
	return exemplarData.salvarExemplar(novoExemp)
}