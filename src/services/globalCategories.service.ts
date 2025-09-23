
import { type Category, TransactionType } from "@prisma/client";
import prisma from "../config/prisma.js";

type  GlobalCategoryInput = Pick<Category, "name" | "color" | "type">;

const _globalCategories: GlobalCategoryInput[] = [
    // Despesas
    { name: "Alimentação", color: "#FF5733", type: TransactionType.Expense },
    { name: "Transporte", color: "#3357FF", type: TransactionType.Expense },
    { name: "Moradia", color: "#33FF57", type: TransactionType.Expense },
    { name: "Saúde", color: "#F033FF", type: TransactionType.Expense },
    { name: "Educação", color: "#FF3366", type: TransactionType.Expense },
    { name: "Lazer", color: "#FFBA33", type: TransactionType.Expense },
    { name: "Compras", color: "#33FFF6", type: TransactionType.Expense },
    { name: "Outros", color: "#B033FF", type: TransactionType.Expense },

    // Receitas
    { name: "Salário", color: "#33FF57", type: TransactionType.Income },
    { name: "Freelance", color: "#33A8FF", type: TransactionType.Income },
    { name: "Investimentos", color: "#FFBA33", type: TransactionType.Income },
    { name: "Outros", color: "#B033FF", type: TransactionType.Income },
    { name: "Lazer", color: "#FFBA33", type: TransactionType.Income },
];

export const initializeGlobalCategories = async (): Promise<Category[]> => {
    const createdCategories: Category[] = [];

    for (const Category of _globalCategories){
        try {
            const existing = await prisma.category.findFirst({
                where: {
                    name: Category.name,
                    type: Category.type,
                },
        });

           if (!existing){
            const newCategory = await prisma.category.create({data: Category});
            console.log(`🔋criado: ${newCategory.name}`);
            createdCategories.push(newCategory);
           } else {
            createdCategories.push(existing);
           }
        
        } catch(err){
            console.error("🚨Erro ao inicializar categoria:", err);

        }

       
     
    }
     console.log("✅Categorias globais inicializadas");

    return createdCategories;
 
};