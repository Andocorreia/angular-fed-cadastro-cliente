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

  getClientes(): Observable<Cliente[]> {
    const url = `${environment.NODE_BFF_CADASTRO_CLIENTE}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  getClienteById(id: number): Observable<Cliente> {
    const url = `${environment.NODE_BFF_CADASTRO_CLIENTE}/detalhe-cliente/${id}`;
    return this.http.get<Cliente>(url);
  }

  deletarCliente(id: number): Observable<any> {
    const url = `${environment.NODE_BFF_CADASTRO_CLIENTE}/deletar-cliente/${id}`;
    return this.http.delete(url);
  }

  alterarCliente(cliente: Cliente): Observable<any> {
    const url = `${environment.NODE_BFF_CADASTRO_CLIENTE}/atualizar-cliente`;
    return this.http.put(url, cliente);
  }
}
