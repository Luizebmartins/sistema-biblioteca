const reservaData = require('../data/reserva')

exports.salvarReserva = async function (data) {
	const novaReserv = data
	return reservaData.salvarReserva(novaReserv)
}