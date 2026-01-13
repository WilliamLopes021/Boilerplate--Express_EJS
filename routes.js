import { Router } from "express";
import homeController from "./src/controllers/homeController.js";

const routes = Router();

// Exemplo de Middleware
// function umMiddleware(req, res, next){
//   // Enquanto next não for passado ele não executa o próximo
//   console.log();
//   console.log("AÇÃO DO MIDDLEWARE");
//   console.log();
//   next();
// }

routes.get("/", homeController.paginaInicial);
routes.post('/', homeController.trataForm)

export default routes;
