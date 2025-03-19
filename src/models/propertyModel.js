import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function create(property){
    const result = await prisma.property.create({
        data: property
    })
    return result
}
