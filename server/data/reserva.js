const reserva = require('../models/reserva')


exports.salvarReserva = function (novaReserv) {
	return reserva.create(novaReserv, { raw: true })
}
