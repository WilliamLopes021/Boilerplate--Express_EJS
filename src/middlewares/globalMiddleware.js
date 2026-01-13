export default (req, res, next) => {
  res.locals.qualquerDado =
    "Locals é uma propriedade de res que guarda qualquer coisa dentro daquela rota";
  // console.log(res.locals);
  /*
    [Object: null prototype] {
      qualquerDado: 'Locals é uma propriedade de res que guarda qualquer coisa dentro daquela rota'
    }
    */
  next();
};
