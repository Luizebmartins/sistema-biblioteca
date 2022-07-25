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

exports.anularReserva = async function (data) {
	const reserva = await reservaData.buscaReservaPorAssociado(data.isbn, data.codigo_assoc)

    if(reserva) {
        const reservaStatus = {
            status: "Anulado"
        }
        return reservaData.atualizarReserva(reserva.codigo, reservaStatus)
    }

    throw "Reserva não encontrada"
}