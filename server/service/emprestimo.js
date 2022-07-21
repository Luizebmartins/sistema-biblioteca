const reservaData = require('../data/reserva')
const emprestimoData = require('../data/emprestimo')
const associadoData = require('../data/associado')


exports.salvarEmprestimo = async function (data) {
	const reservas = await reservaData.buscaReservaPorIsbn(data.isbn)

	let checkReserv = false
	let reservaValid
	(reservas || []).forEach(reserva => {
		if(reserva.status === "Iniciado" && !checkReserv) {
			reservaValid = reserva
			checkReserv = true
		}
		
	})

	//Verifica se o livro não possui reserva, e se caso tiver, o primeiro é o associado
	if(reservaValid && reservaValid.codigo_assoc !== data.codigo_assoc) throw new Error("Alguem na frente!")

	//Caso ele seja o primeiro na reserva
	if(reservaValid && reservaValid.codigo_assoc === data.codigo_assoc) {
		const associado = await associadoData.buscarPorCodigo(data.codigo_assoc)
		if(associado) {
			const reservaStatus = {
				status: "Avisado"
			}
			await reservaData.atualizarReserva(reservaValid.codigo, reservaStatus)
		}
	}

	data.data_emp = Date.now()
	data.data_devol = Date.now()
	return emprestimoData.salvarEmprestimo(data)
}