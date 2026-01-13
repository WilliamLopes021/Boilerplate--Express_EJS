import mongoose from "mongoose";
import { config } from "dotenv";

config({
  path: "./.env",
});

export default async function dbConnection(app) {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Conectado a base dados");
    app.emit("pronto"); // emitindo sinal para logar o banco de dados primeiro e depois o servidor se ligar a porta

    return mongoose.connection.getClient();
  } catch (e) {
    throw e;
  }
}
