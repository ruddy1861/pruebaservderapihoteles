export class ControladorReserva{
    constructor(){}

    registrarReserva(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito reserva lista"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }

    buscarReserva(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito buscando reserva"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }
    
    buscandoReservas(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito buscando reservas"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }

    editandoReserva(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito reserva editada"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }
    EliminandoReserva(req,res){
        try{
            res.status(200).json({
                "mensaje":"Exito reserva eliminada"
            })
        }catch(errorPeticion){
            res.status(400).json({
                "mensaje":"Fallamos"+errorPeticion
            })
        }
    }
}