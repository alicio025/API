// biome-ignore assist/source/organizeImports: import order handled manually
import dotenv from "dotenv";
import app from "./app.js";
import { prismaConnect } from "./config/prisma.js";
import { initializeGlobalCategories } from "./services/globalCategories.service.js";
dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {
	try {
		await prismaConnect();

		await initializeGlobalCategories();

		await app.listen({ port: PORT }).then(() => {
			console.log(`servidor rodando na porta ${PORT}`);
		});
	} catch (err) {
		console.error(err);
	}
};

startServer();
