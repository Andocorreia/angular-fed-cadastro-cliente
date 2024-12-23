import { Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { DeletarClientesComponent } from './deletar-clientes/deletar-clientes.component';
import { AlterarClientesComponent } from './alterar-clientes/alterar-clientes.component';

export const routes: Routes = [

  { path: '', component: ListarClientesComponent },
  { path: 'alterar-clientes', component: AlterarClientesComponent },
  { path: 'deletar-clientes', component: DeletarClientesComponent },
  { path: 'cadastrar-clientes', component: CadastrarClientesComponent }
];
