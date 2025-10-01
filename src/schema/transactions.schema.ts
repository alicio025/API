import { ObjectId } from "mongodb";
import { z } from "zod";


const isValidObjectId = (id: string): boolean =>  ObjectId.isValid(id);


export const createTransaction = z.object({
    description: z.string().min(1, "Descrição obrigatória"),
    amount: z.number().min(0, "Valor deve ser positivo"),
    date: z.coerce.date().refine(
        (d) => d instanceof Date && !Number.isNaN(d.getTime()),
        { message: "Data inválida" }
    ),
    categoryId: z.string().refine(isValidObjectId),
    type: z.enum(["Expense", "Income"], {
        message: "Tipo de transação inválido"
    })
});
    

export const transactionParams = z.object({});


