import type {  FastifyInstance } from "fastify";
import { getCategories } from "../controllers/category.controller.js";

const _categoryRoutes = async(_Fastify: FastifyInstance): Promise<void> => {

    _Fastify.get('/', getCategories);


};

export default _categoryRoutes;