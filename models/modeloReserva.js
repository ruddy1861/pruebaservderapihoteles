import mongoose, { Mongoose } from "mongoose"

const Schema = mongoose.Schema;

//Construimos el esquema personalizando la info
const Reserva=new Schema({
    nombreCliente:{
        type:String,
        require:true
    },
    apellidoCliente:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    fechaInicio:{
        type:Date,
        require:true
    },
    fechaFinal:{
        type:Date,
        require:true
    },
    cantidadPersonas:{
        type:Number,
        require:true
    },
    idHabitacion:{
       type:Number,
       require:true
    }
})
export const modeloHabitacion=mongoose.model('Reserva',Reserva)