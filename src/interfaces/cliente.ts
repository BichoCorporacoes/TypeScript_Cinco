import { Acomodacao } from "./acomodacao";
import { Docuementos } from "./Documentos";
import { Endereco } from "./endereco";
import { Roles } from "./roles";
import { Telefone } from "./telefone";

export interface Usuario {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  password: string;
  token: string;
  nivel_de_acesso: Roles;
  documentos?: Docuementos[];
  dependente?: dependente[];
  acomodacao?: Acomodacao;
  endereco?: Endereco;
  telefones?: Telefone[];
}
interface dependente {
  id: number;
  nome: string;
  nomeSocial: string;
  telefones?: Telefone[];
  documentos?: Docuementos[];
}
