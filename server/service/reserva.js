const reservaData = require('../data/reserva')
const emprestimoData = require('../data/emprestimo')
const exemplarData = require('../data/exemplar')


exports.salvarReserva = async function (data) {

    const emprestimos = await emprestimoData.buscarEmprestimos(data.isbn)
    const exemplares = await exemplarData.buscaExemplarPorIsbn(data.isbn)
    
    if(emprestimos.length < exemplares.length) throw new Error("Ainda existe exemplar disponível")

	const novaReserv = data
	return reservaData.salvarReserva(novaReserv)
}

exports.buscarReservasPorIsbn = async function (isbn) {
	return reservaData.buscaReservaPorIsbn(isbn)
}