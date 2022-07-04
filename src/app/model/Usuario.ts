import { Postagem } from "./Postagem";

export class Usuario {
    public usuarioId: number;
    public nome: string;
    public usuarioEmail: string;
    public senha: string;
    public imagemUrl: string;
    public tipo: string;
    public criadoEm: Date;
    public postagem: Postagem[];
}
