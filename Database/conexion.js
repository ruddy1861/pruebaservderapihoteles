import mongoose from 'mongoose';

export async function establecerConexion(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("Conexion Exitosa...")
    } catch (error) {
        console.log("Conexion Fallida..."+error)
    }
}