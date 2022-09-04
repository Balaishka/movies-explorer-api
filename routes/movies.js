const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const isURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

router.get('/', getMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required().length(4),
    description: Joi.string().required(),
    image: Joi.string().required().regex(isURL),
    trailerLink: Joi.string().required().regex(isURL),
    thumbnail: Joi.string().required().regex(isURL),
    movieId: Joi.string().required().hex(),
    nameRU: Joi.string().required().regex(/^[а-яёА-ЯЁ\d\s]+$/),
    nameEN: Joi.string().required().regex(/^[a-zA-Z\d\s]+$/),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
}), deleteMovie);

module.exports = router;
