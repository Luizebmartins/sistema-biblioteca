const reserva = require('../models/reserva')


exports.salvarReserva = function (novaReserv) {
	return reserva.create(novaReserv, { raw: true })
}

exports.buscaReservaPorIsbn = function (isbn) {
	return reserva.findAll({ where: { isbn } })
}

exports.buscaReservaPorAssociado = function (isbn, codigo_assoc) {
	return reserva.findOne({ where: { isbn, codigo_assoc } })
}

exports.atualizarReserva = function (codigo, novoDado) {
	return reserva.update(novoDado, { where: { codigo } })
}



