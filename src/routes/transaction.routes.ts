import type { FastifyInstance } from "fastify";
import _createTransaction from "../controllers/transactions/createTransaction.controller.js";

const transactionRoutes = async(_fastify: FastifyInstance) => {
  _fastify.route({
        method: "POST",
        url: "/",
        schema: {
            
        },
        handler: _createTransaction,
     });

};
export default transactionRoutes;