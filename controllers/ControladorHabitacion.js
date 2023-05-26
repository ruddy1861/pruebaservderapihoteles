import { ServicioHabitaciones } from "../Services/ServicioHabitaciones.js"
 export class ControladorHabitaciones{
    constructor(){}

    async registrarHabitacion(req,res){
        let datosHabitacion=req.body
        let servicioHabitaciones=new ServicioHabitaciones()
        try{
            await servicioHabitaciones.registrarHabitacion(datosHabitacion)
            res.status(200).json({
                "mensaje":"Exito registrando los datos"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }

    async buscarHabitacion(req,res){
        let idHabitacion=req.params.idhabitacion
        let serviciohabitacion=new ServicioHabitaciones()
        try{
            res.status(200).json({
                "mensaje":"Exito Buscando habitacion"+idHabitacion,
                "Habitacion":await serviciohabitacion.buscarHabitacion(idHabitacion)
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }
    
    async buscandoHabitaciones(req,res){
        let serviciohabitacion=new ServicioHabitaciones()
        try{
            res.status(200).json({
                "mensaje":"Exito Buscando Habitaciones",
                "habitaciones":await serviciohabitacion.buscarTodasHabitaciones()
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }

    async editandoHabitacion(req,res){
        let idHabitacion=req.params.idhabitacion
        let datosHabitacion=req.body
        let serviciohabitacion=new ServicioHabitaciones()
        try{
            await serviciohabitacion.editarHabitacion(idHabitacion,datosHabitacion)
            res.status(200).json({
                "mensaje":"Exito habitacion editada"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }
}