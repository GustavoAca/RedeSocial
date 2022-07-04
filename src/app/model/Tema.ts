import { Postagem } from "./Postagem";

export  class Tema {
  public temaId: number;
  public descricao: string;
  public tag: string;
  public postagem: Postagem[];
}
