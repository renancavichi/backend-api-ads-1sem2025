import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function create(property){
    const result = await prisma.property.create({
        data: property
    })
    return result
}

export async function remove(id){
    const result = await prisma.property.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.property.findMany()
    return result
}

export async function update(id, property){
    const result = await prisma.property.update({
        where: {
            id
        },
        data: property
    })
    return result
}