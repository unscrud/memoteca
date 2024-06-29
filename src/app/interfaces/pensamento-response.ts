import { Pensamento } from "../components/pensamentos/pensamento/pensamento";

export interface PensamentoResponse {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Pensamento[];
}
