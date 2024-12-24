import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoCivil } from '../share/enum/estado-civil.enum';
import { Sexo } from '../share/enum/sexo.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-clientes',
  imports: [ReactiveFormsModule, CommonModule  ],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.scss'
})
export class CadastrarClientesComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private clienteService : ClientesService, private router : Router, private route: ActivatedRoute ) {
    this.usuarioForm = this.usuarioFormLoad()
  }

  ngOnInit() {
  }

  usuarioFormLoad() {
    return this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      telefone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      estadoCivil: ['', Validators.required]
    });
  }

  getComboEstadosCivis(): Array<{ code: string, name: string }> {
    return Object.entries(EstadoCivil).map(([key, value]) => ({ code: key, name: value }));
  }

  getComboSexo(): Array<{ code: string, name: string }> {
    return Object.entries(Sexo).map(([key, value]) => ({ code: key, name: value }));
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
       console.log('Formulário válido');

    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }


}
