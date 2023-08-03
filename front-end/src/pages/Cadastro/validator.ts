import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .email("Deve ser um e-mail")
    .nonempty("E-mail é obrigatória"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "Deve ter no mínimo 6 caracter"),
  name: z.string(),
  img_perfil: z.string().nullish(),
  number: z.string().min(9).max(15),
});

export type CadastroData = z.infer<typeof schema>;
