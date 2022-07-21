var moment = require('moment');
const reservaData = require('../data/reserva')
const emprestimoData = require('../data/emprestimo')
const associadoData = require('../data/associado')


exports.salvarEmprestimo = async function (data) {
	const reservas = await reservaData.buscaReservaPorIsbn(data.isbn)

	let checkReserv = false
	let reservaValid
	(reservas || []).forEach(reserva => {
		if(reserva.status !== "Anulado" && !checkReserv) {
			reservaValid = reserva
			checkReserv = true
		}
		
	})

	//Verifica se o livro não possui reserva, e se caso tiver, o primeiro é o associado
	if(reservaValid && reservaValid.codigo_assoc !== data.codigo_assoc) throw new Error("Alguem na frente!")

	const associado = await associadoData.buscarPorCodigo(data.codigo_assoc)

	//Caso ele seja o primeiro na reserva
	if(reservaValid && reservaValid.codigo_assoc === data.codigo_assoc) {
		if(associado) {
			const reservaStatus = {
				status: "Anulado"
			}
			await reservaData.atualizarReserva(reservaValid.codigo, reservaStatus)
		}
	}



	data.data_emp = moment()
	if(associado.status === "Grad") {
		data.data_devol = moment().add(7, 'd');
	} else if(associado.status === "Posgrad") {
		data.data_devol = moment().add(10, 'd');
	} else {
		data.data_devol = moment().add(14, 'd');
	}
	
	return emprestimoData.salvarEmprestimo(data)
}


exports.devolverExemplar = async function (data) {
	const emprestimo = await emprestimoData.buscarEmprestimo(data.isbn, data.nro_exemplar, data.codigo_assoc)

	if(emprestimo) {
		const reservas = await reservaData.buscaReservaPorIsbn(data.isbn)
	
		let checkReserv = false
		let reservaValid
		(reservas || []).forEach(reserva => {
			if(reserva.status !== "Anulado" && !checkReserv) {
				reservaValid = reserva
				checkReserv = true
			}
			
		})
	
		if(reservaValid) {
			const reservaStatus = {
				status: "Avisado"
			}
			await reservaData.atualizarReserva(reservaValid.codigo, reservaStatus)
		}
	
	
		await emprestimoData.removerEmprestimo(emprestimo.codigo)
	
		const now = moment()
		const diff = now.diff(emprestimo.data_devol, "days")
		return diff > 0 ? {multa: diff} : {multa: 0}
	}
	throw "Emprestimo não encontrado"
}

exports.buscarAtrasados = async function () {
	const emprestimos = await emprestimoData.buscarTodosEmprestimos() 
	
	let atrasados = []
	if(emprestimos.length) {
		const now = moment()
		emprestimos.forEach(emprestimo => {
			if(now.diff(emprestimo.data_devol, "days") > 0) {
				atrasados.push({codigo_assoc: emprestimo.codigo_assoc, isbn: emprestimo.isbn})
			}
			
		})
	}

	return atrasados
}