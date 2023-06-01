import config from "config";
import mongoose from "mongoose";

export default async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        console.log('Conectou ao banco de dados!')
    } catch (error) {
        console.log('Não foi possível conectar!')
        console.log(`Erro: ${error}`)
    }

}