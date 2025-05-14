import { PrismaClient } from "@prisma/client";
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
  id: z.number({
        required_error: 'O id é obrigatório.',
        invalid_type_error: 'O id deve ser um número.'
        })
    .positive({message: "O ID deve ser um valor numérico positivo."}),     
  name: z.string({
        required_error: 'O nome é obrigatório.',
        invalid_type_error: 'O nome deve ser um texto.'
        })
    .min(5, {message: "O nome deve ter no mínimo 5 caracteres."})
    .max(255, {message: "O nome deve ter no máximo 255 caracteres."}),    
  email: z.string({
        required_error: 'O email é obrigatório.',
        invalid_type_error: 'O email deve ser um texto.'
        })
    .email({message: "Email inválido"}),   
  pass: z.string({
    required_error: 'A senha é obrigatória.',
    invalid_type_error: 'A senha deve ser um texto.'
    })
    .min(6, {message: "A senha deve ter no mínimo 6 caracteres."})
    .max(255, {message: "A senha deve ter no máximo 255 caracteres."}),   
  avatar: z.string({
    required_error: 'O avatar é obrigatório.',
    invalid_type_error: 'O avatar deve ser um texto.'
    })
    .url({message: "URL inválida"})
    .max(500, {message: "O avatar deve ter no máximo 500 caracteres."})
    .optional()
})

export const userValidator = (user, partial = null) => {
    if(partial){
        return userSchema.partial(partial).safeParse(user)
    }
    return userSchema.safeParse(user)
}

export async function create(user){
    const result = await prisma.users.create({
        data: user,
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true
        }
    })
    return result
}
