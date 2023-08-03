import IProjeto from "./IProjetos";

//  Interface de uma tarefa que possui duas propriedades
export default interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  projeto: IProjeto;
}
