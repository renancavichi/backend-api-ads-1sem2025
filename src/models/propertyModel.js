import { PrismaClient } from "@prisma/client";
import { z } from 'zod'

const prisma = new PrismaClient()

const propertySchema = z.object({
  id: z.number().positive(),     
  type: z.string().min(5).max(7),    
  adress: z.string().min(6).max(350),   
  rooms: z.number().positive(),  
  property: z.string().min(4).max(11) 
})

export const propertyValidator = (property, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(property)
    }
    return propertySchema.safeParse(property)
}

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