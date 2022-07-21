const reservaData = require('../data/reserva')

exports.salvarReserva = async function (data) {
	const novaReserv = data
	return reservaData.salvarReserva(novaReserv)
}

exports.buscarReservasPorIsbn = async function (isbn) {
	return reservaData.buscaReservaPorIsbn(isbn)
}