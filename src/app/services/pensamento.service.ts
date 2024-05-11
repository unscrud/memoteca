import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../components/pensamentos/pensamento/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }
}
