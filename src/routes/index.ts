import type{ FastifyInstance } from 'fastify';
import _categoryRoutes from './category.routes.js';
import transactionRoutes from './transaction.routes.js';

async function routes(fastify: FastifyInstance): Promise<void>{

    fastify.get('/health', async() => {

        return { 
            status: 'ok',
            message: 'API Rodando normalmente'
         };
    });

    fastify.register(_categoryRoutes, { prefix: '/categories'})
    fastify.register(transactionRoutes, { prefix: '/transactions'})
}

export default routes;





