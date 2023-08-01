import {z} from "zod"

export const schema = z.object({
    email: z.string().email("Deve ser um e-mail").nonempty("E-mail é obrigatória"),
    password: z.string().nonempty("Senha é obrigatória").min(6, "Deve ter no mínimo 6 caracter")
})

export type LoginData = z.infer<typeof schema>