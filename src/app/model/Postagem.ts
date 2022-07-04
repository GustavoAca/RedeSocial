import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class  Postagem {
  public postagemId: number;
  public conteudo: string;
  public abracei: number;
  public criadoEm: Date;
  public atualizadoEm: Date;
  public imagem: string;
  public usuario: Usuario;
  public tema: Tema;
}
