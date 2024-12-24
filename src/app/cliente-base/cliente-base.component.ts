import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../share/models/cliente.model';
import { CommonModule } from '@angular/common';
import { Sexo } from '../share/enum/sexo.enum';
import { Status } from '../share/enum/status.enum';
import { EstadoCivil } from '../share/enum/estado-civil.enum';
import { FormsModule } from '@angular/forms';
import { CpfFormatPipe } from '../share/pipe/cpf.pipe';
import { TelefoneFormatPipe } from '../share/pipe/telefone.pipe';
import { DataFormatPipe } from '../share/pipe/data.pipe';
import { CepFormatPipe } from '../share/pipe/cep.pipe';

@Component({
  selector: 'app-cliente-base',
  imports: [
    CommonModule,
    FormsModule,
    CpfFormatPipe,
    TelefoneFormatPipe,
    DataFormatPipe,
    CepFormatPipe
  ],
  templateUrl: './cliente-base.component.html',
  styleUrl: './cliente-base.component.scss'
})
export class ClienteBaseComponent implements OnInit {
  @Input() id: number = 0;
  @Input() titulo: String = '';
  @Input() formularioEditavel: boolean = false;


  cliente: Cliente = {} as Cliente;

  constructor(private route: ActivatedRoute, private clienteService : ClientesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.clienteService.getClienteById(this.id).subscribe(cliente => {
        this.cliente = cliente;
      });
    });
  }

  getSelectedEstadoCivil(): string {
    return EstadoCivil[this.cliente.estadoCivil];
  }

  getComboEstadosCivis(): Array<{ code: string, name: string }> {
    return Object.entries(EstadoCivil).map(([key, value]) => ({ code: key, name: value }));
  }

  getSelectedSexo(): string {
    return Sexo[this.cliente.sexo];
  }

  getComboSexo(): Array<{ code: string, name: string }> {
    return Object.entries(Sexo).map(([key, value]) => ({ code: key, name: value }));
  }

  getStatus() {
    return Status[this.cliente.status];
  }

  getCliente() {
    return this.cliente;
  }

}
