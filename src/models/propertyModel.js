import { PrismaClient } from "@prisma/client";
import { z } from 'zod'

const prisma = new PrismaClient()

const propertySchema = z.object({
  id: z.number({
        required_error: 'O id é obrigatório.',
        invalid_type_error: 'O id deve ser um número.'
    })
    .positive({message: "O ID deve ser um valor numérico positivo."}),    
  type: z.string({
        required_error: 'O tipo é obrigatório.',
        invalid_type_error: 'O tipo deve ser um texto.'
    })
    .min(5, {message: "O tipo deve ter no mínimo 5 caracteres."})
    .max(7, {message: "O tipo deve ter no máximo 7 caracteres."}),    
  adress: z.string({
        required_error: 'O endereço é obrigatório.',
        invalid_type_error: 'O endereço deve ser um texto.'
    })
    .min(6, {message: "O endereço deve ter no mínimo 6 caracteres."})
    .max(350, {message: "O endereço deve ter no máximo 350 caracteres."}),   
  rooms: z.number({
        required_error: 'O quarto é obrigatório.',
        invalid_type_error: 'O quarto deve ser um número.'
    })
    .positive(),  
  property: z.string({
        required_error: 'O propriedade é obrigatório.',
        invalid_type_error: 'O propriedade deve ser um texto.'
    })
    .min(4,  {message: "A propriedade deve ter no mínimo 4 caracteres."})
    .max(11, {message: "A propriedade deve ter no máximo 11 caracteres."}) 
})

export const propertyValidator = (property, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(property)
    }
    return propertySchema.safeParse(property)
}

export async function create(property){
    const result = await prisma.propertylaskjdf.create({
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