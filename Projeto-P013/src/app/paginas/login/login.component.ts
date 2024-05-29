import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {

    this.formLogin = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]

    });

  }

  login(){

    this.auth.login(this.formLogin.getRawValue())
  }









}
