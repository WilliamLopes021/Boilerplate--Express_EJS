import e from "express";
import routes from "./routes.js";
import * as path from "path";
import { fileURLToPath } from "url";
import globalMiddleware from "./src/middlewares/globalMiddleware.js";
import { checkCsrfError, setCsrfToken } from "./src/middlewares/csrfMiddlewares.js";
import dbConnection from "./dbConnection.js";
import session from "express-session";
import { MongoStore } from "connect-mongo";
import flash from "connect-flash";
import helmet from 'helmet';
import csrf from 'csurf'; // Cross-Site Request Forgery (CSRF)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = e();

app.use(helmet());
app.use(e.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(e.urlencoded({ extended: true }));
app.use(e.json());

const clientPromise = dbConnection(app);

// Cria/configura uma tabela de sessões no banco de dados
const sessionOptions = session({
  store: MongoStore.create({
    clientPromise,
    collectionName: "sessions",
    dbName: "teste",
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 60 * 60 * 24 * 1000,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.use(csrf()); // isso já previne ataques
app.use(checkCsrfError);
app.use(setCsrfToken);
app.use(globalMiddleware); // ATUA EM TODAS AS ROTAS E VERBOS HTTP
app.use(routes);

app.on("pronto", () => {
  app.listen(4000, () => {
    console.log("Rodando em http://localhost:4000");
  });
});
