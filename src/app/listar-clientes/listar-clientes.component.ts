import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../share/models/cliente.model';
import { CommonModule } from '@angular/common';
import { Status } from '../share/enum/status.enum';
import { EstadoCivil } from '../share/enum/estado-civil.enum';
import { Sexo } from '../share/enum/sexo.enum';
import { CpfFormatPipe } from "../share/pipe/cpf.pipe";
import { TelefoneFormatPipe } from "../share/pipe/telefone.pipe";
import { Endereco } from '../share/models/endereco.model';
import { Router } from '@angular/router';
import { DataFormatPipe } from '../share/pipe/data.pipe';
@Component({
  selector: 'app-listar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    CpfFormatPipe,
    TelefoneFormatPipe,
    DataFormatPipe
],
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.scss'
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(
    private clienteService: ClientesService,
    private router : Router
  ) {}

  ngOnInit() {
    this.carregaClientes();
  }

  carregaClientes(): void {
    const clientes = this.clienteService.getClientes().subscribe( (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Erro ao buscar clientes:', error);
      }
    );
  }

  getStatusCliente(status: keyof typeof Status): string {
    return Status[status];
  }

  getEstadoCivil (estadoCivil  : keyof typeof EstadoCivil): string {
    return EstadoCivil[estadoCivil];
  }

  getSexo(sexo : keyof typeof Sexo): string {
    return Sexo[sexo];
  }

  getEndereco(endereco: Endereco): string {
    return `${endereco.rua}, ${endereco.numero} ${endereco.complemento ? endereco.complemento + ', ' : ''}${endereco.bairro} - ${endereco.cidade} - ${endereco.estado}, CEP: ${endereco.cep}`;
  }

  getDetalhesCliente(id: number): void {
    this.router.navigate(['/consulta-detalhes-clientes', id]);
  }

  editarCliente(id: number): void {
    this.router.navigate(['/alterar-clientes', id]);
  }

  excluirCliente(id: number): void {
    this.router.navigate(['/deletar-clientes', id]);
  }

  novoCliente(): void {
    this.router.navigate(['/cadastrar-clientes']);
  }

}
