import express from 'express'
import asyncHandler from 'express-async-handler'

import { fetchKnight } from './get-next-turns'

const router = express.Router()

router.get('/knight', asyncHandler(fetchKnight))

export const knight = router
