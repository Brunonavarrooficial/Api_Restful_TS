import express from 'express'
import config from 'config'

import router from './router'
import morganMiddleware from './middleware/morganMiddleware'

import db from '../config/db'
import Logger from '../config/logger'

const app = express()
app.use(express.json())

app.use(morganMiddleware)

app.use('/api/', router)


const port = config.get<number>('port')

app.listen(port, async () => {
    await db()
    Logger.info(`Aplicação rodando na porta http://localhost:${port}`)
})

