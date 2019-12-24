import supertest from 'supertest'

import { app } from '../src/app'
import { db } from '../src/services/knex-connection'

const apiRequest = supertest(app)

export { db, apiRequest }
