import { Endereco } from './endereco.model';

export type EstadoCivil = 'S' | 'C' | 'D' | 'V' | 'U';

export type Sexo = 'M' | 'F';

export type ClienteStatus = 'A' | 'I' | 'E';

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  endereco: Endereco;
  telefone: string;
  sexo: Sexo;
  dataNascimento: string;
  dataCadastro: string;
  estadoCivil: EstadoCivil;
  status: ClienteStatus;
}
