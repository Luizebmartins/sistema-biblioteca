const exemplarData = require('../data/exemplar')

exports.salvarExemplar = async function (data) {
	const novoExemp = data
	return exemplarData.salvarExemplar(novoExemp)
}