import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../components/pensamentos/pensamento/pensamento';
import { Observable } from 'rxjs';

interface PensamentoResponse {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Pensamento[];
}

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(pagina: number): Observable<PensamentoResponse> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set('_page', pagina.toString())
      .set('_per_page', itensPorPagina.toString());

    return this.http.get<PensamentoResponse>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: String): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
