import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;
  

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }


  ngOnInit() {

    this.formCadastro = this.fb.group({

      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]

    });

  }

  cadastrarUSer() {
    
    if (this.formCadastro.valid) {
      this.service.addUser(this.formCadastro.getRawValue())
    
    }
    
  }

  get isValid(): boolean{

    return this.formCadastro.valid

  }


}
