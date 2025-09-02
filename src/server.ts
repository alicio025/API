// biome-ignore assist/source/organizeImports: import order handled manually
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {

    try {
        await app.listen({ port: PORT }).then(() => {
            console.log(`servidor rodando na porta ${PORT}`)
        })

    } catch (err) {
        console.error(err)
    }
}

startServer()