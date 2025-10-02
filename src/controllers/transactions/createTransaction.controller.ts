import type { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../config/prisma.js";
import { createTransactionSchema } from "../../schema/transactions.schema.js";




const _createTransaction = async (_request: FastifyRequest, _reply: FastifyReply): Promise<void> => {
    const userId = "12345";

    if(!userId){
        _reply.status(401).send({ message: "Usuário não autenticado"});
        return;
        
    }


const _result = createTransactionSchema.safeParse(_request.body);

if(!_result.success) {
    const errorMessages = _result.error.issues[0]?.message || "validacao inválida"; 

     _reply.status(400).send({error: errorMessages});
     return
}

const _Transaction = _result.data;

try {
  const _category= await prisma.category.findFirst({
    where: {
        id: _Transaction.categoryId,
        type: _Transaction.type,

    },
  });

    if(!_category){
        _reply.status(400).send({error: "Categoria inválida"})
        return;
    }

    const _parsedDate = new Date(_Transaction.date);

    const _newTransaction = await prisma.transaction.create({
        data:{
        ..._Transaction,
        userId,
        date: _parsedDate,
        
        },
        include: {
            category: true,
             
        },
    });

    _reply.status(201).send(_newTransaction);
} catch(_err) {
    _request.log.error("Erro ao criar transacão");
    _reply.status(500).send({ error: "Erro interno do servidor" });
}

}; 


export default _createTransaction;