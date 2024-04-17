import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, 'O campo Nome não pode ser vazio!'),
    email: z.string().min(1, 'O campo E-mail não pode ser vazio!'),
    subject: z.string(),
    message: z.string().min(1, 'O campo Mensagem não pode ser vazio!')
})
