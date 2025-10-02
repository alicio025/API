import type { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../config/prisma.js";


export const getCategories = async (
    _request: FastifyRequest,
    _reply: FastifyReply
): Promise<void> => {

    try { 
        const _categories = await prisma.category.findMany({
            orderBy: { name: "asc"},
        });

        _reply.send(_categories);

    } catch(_err){
        _request.log.error("Erro ao buscar categorias");
        _reply.status(500).send({ message: "Erro ao buscar categorias" });

    }


};