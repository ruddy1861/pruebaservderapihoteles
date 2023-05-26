import express from 'express' 
import { ControladorHabitaciones } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//objeto
let controladorHabitacion = new ControladorHabitaciones()
let controladorReserva = new ControladorReserva()

// para separar las rutas de la logica de negocio , utilizare un metodo especial de express
export let rutas=express.Router()

 // Listado de servicios,definimos el onpoint 
rutas.post('/registrarhabitacion',controladorHabitacion.registrarHabitacion)
rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscarHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
rutas.post('/reservarhabitacion',controladorReserva.registrarReserva)
rutas.get('/buscarreserva',controladorReserva.buscarReserva)
rutas.get('/buscarreservashabitaciones',controladorReserva.buscandoReservas)
rutas.put('/editarreservahabitacion',controladorReserva.editandoReserva)
rutas.delete('/eliminarreserva',controladorReserva.EliminandoReserva)