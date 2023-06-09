import dotenv from 'dotenv'

dotenv.config()

export default {
    port: 3000,
    dbUri: process.env.DB_URI,
    env: process.env.ENV
}