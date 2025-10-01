import type { FastifyReply, FastifyRequest } from "fastify";



const _createTransaction = async (_request: FastifyRequest, _reply: FastifyReply): Promise<void> => {
    const userId = "12345";

    if(!userId){
        _reply.status(401).send({ message: "Usuário não autenticado"});
    }

}; 


export default _createTransaction;