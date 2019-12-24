import errorMiddleware from 'error-middleware'
import express from 'express'
import { knight } from './knight'

const router = express.Router()

router.use(knight)
router.use(errorMiddleware)

export const routes = router
