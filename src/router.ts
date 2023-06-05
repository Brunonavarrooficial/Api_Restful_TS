import { Router, Request, Response } from "express";
import { createMovie, findMOvieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";

import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from './middleware/movieValidation'

const router = Router()

export default router
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Api Working!')
    })
    .get('/movie/:id', findMOvieById)
    .get('/movie', getAllMovies)
    .post('/movie', movieCreateValidation(), validate, createMovie)
    .patch('/movie/:id', movieCreateValidation(), validate, updateMovie)
    .delete('/movie/:id', validate, removeMovie)