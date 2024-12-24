import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { ClienteBaseComponent } from '../cliente-base/cliente-base.component';
import { Cliente } from '../share/models/cliente.model';

@Component({
  selector: 'app-alterar-clientes',
  imports: [CommonModule, ClienteBaseComponent],
  templateUrl: './alterar-clientes.component.html',
  styleUrl: './alterar-clientes.component.scss'
})
export class AlterarClientesComponent implements OnInit {
  id: number = 0;
  @ViewChild(ClienteBaseComponent) clienteBaseComponent: ClienteBaseComponent | undefined;

  constructor(private clienteService : ClientesService, private router : Router, private route: ActivatedRoute  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

  public alterar() {
    const  cliente = this.clienteBaseComponent?.getCliente();

    if (cliente === undefined) {
      return;
    }

    this.clienteService.alterarCliente(cliente).subscribe(() => {
      this.router.navigate(['/']);
    });
  };

  public voltar() {
    this.router.navigate(['/']);
  }

}
