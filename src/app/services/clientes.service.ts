import { Injectable } from '@angular/core';
import { Cliente } from '../share/models/cliente.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> {
    const url = `${environment.NODE_BFF_CADASTRO_CLIENTE}/clientes`;
    return this.http.get<Cliente[]>(url);
  }
}
