import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { ClienteBaseComponent } from "../cliente-base/cliente-base.component";

@Component({
  selector: 'app-deletar-clientes',
  imports: [ClienteBaseComponent],
  templateUrl: './deletar-clientes.component.html',
  styleUrl: './deletar-clientes.component.scss'
})
export class DeletarClientesComponent implements OnInit {
  id: number = 0;

  constructor(private clienteService : ClientesService, private router : Router, private route: ActivatedRoute  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

  public deletar() {
    this.clienteService.deletarCliente(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  };

  public voltar() {
    this.router.navigate(['/']);
  }


}
