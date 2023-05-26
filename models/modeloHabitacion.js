import mongoose, { Mongoose } from "mongoose"

const Schema = mongoose.Schema;

//Construimos el esquema personalizando la info
const Habitacion=new Schema({
    nombre:{
        type:String,
        require:true
    },
    foto:{
        type:[String],
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precioNoche:{
        type:Number,
        require:true
    },
    cantidadmaxima:{
        type:Number,
        require:true
    }
})
export const modeloHabitacion=mongoose.model('habitacion',Habitacion)