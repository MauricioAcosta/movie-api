const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

//rutas
moviesApi(app);

//capturar erro 404 siempre va al final de las rutas
app.use(notFoundHandler);

//Manejadores de errores
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
