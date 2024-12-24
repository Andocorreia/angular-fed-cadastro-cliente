import { Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { DeletarClientesComponent } from './deletar-clientes/deletar-clientes.component';
import { AlterarClientesComponent } from './alterar-clientes/alterar-clientes.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

export const routes: Routes = [

  { path: '', component: ListarClientesComponent },
  { path: 'consulta-detalhes-clientes/:id', component: DetalhesClienteComponent },
  { path: 'alterar-clientes/:id', component: AlterarClientesComponent },
  { path: 'deletar-clientes/:id', component: DeletarClientesComponent },
  { path: 'cadastrar-clientes', component: CadastrarClientesComponent }
];
