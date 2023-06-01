import express from 'express'
import config from 'config'

const app = express()

app.use(express.json())

import db from '../config/db'

import router from './router'
app.use('/api/', router)

import Logger from '../config/logger'

const port = config.get<number>('port')

app.listen(port, async () => {
    await db()
    Logger.info(`Aplicação rodando na porta http://localhost:${port}`)
})

