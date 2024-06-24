import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../components/pensamentos/pensamento/pensamento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  listar(pagina: number): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    const url = `${this.API}?_page=${pagina}&_per_page=${itensPorPagina}`;

    //let params = new HttpParams()
    //.set('_page', pagina)
    //.set('_per_page', itensPorPagina);

    const pensamentos: Observable<Pensamento[]> = this.http
      .get<PensamentoResponse>(url)
      .pipe(map(response => response.data));

    console.log(pensamentos)

    //return this.http.get<Pensamento[]>(this.API, { params });
    return pensamentos;
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: String): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
