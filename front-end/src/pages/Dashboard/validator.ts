import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um e-mail").nullish(),
  infos: z.string().nullish(),
  name: z.string().nonempty("Nome é obrigatorio"),
  img_perfil: z.string().nullish(),
  number: z.string().min(9).max(15).nonempty("Numero é obrigatorio"),
  userId: z.string()
});

export type ContactsData = z.infer<typeof schema>;

export interface ContactsResponse extends ContactsData {
  id: string;
}
