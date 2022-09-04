require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorsHandler } = require('./middlewares/errorsHandler');
const { limiter } = require('./middlewares/rateLimiter');

const { PORT = 3000 } = process.env;
const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(requestLogger); // подключаем логгер запросов

app.use(cors());

app.use(limiter);

app.use(routes); // подключаем роуты

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

app.use(errorsHandler);

app.listen(PORT, () => {
  /* console.log('Ссылка на сервер');
  console.log(BASE_PATH); */
});
