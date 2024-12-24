import { Component, OnInit } from '@angular/core';
import { ClienteBaseComponent } from "../cliente-base/cliente-base.component";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalhes-cliente',
  imports: [ClienteBaseComponent],
  templateUrl: './detalhes-cliente.component.html',
  styleUrl: './detalhes-cliente.component.scss'
})
export class DetalhesClienteComponent  implements OnInit {
  id: number = 0;

  constructor(private router : Router, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

  public voltar() {
    this.router.navigate(['/']);
  }

}
