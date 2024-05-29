import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

lista : Array<User> = [{nome:'jequelia', cpf:123456, rg:1254, email:'jequelia@adm.com', senha:'123456'},
                      {nome:'Andrew', cpf:125456, rg:1954, email:'andrew@adm.com', senha:'1234567'}]
  

  constructor() { }

  addUser(user:User){
    this.lista.push(user);
  }

  delUser(user: User){
    for (let i = 0; i <this.lista.length; i++) {
      
     if(user === this.lista[i]){
   
       this.lista.splice(i,1)
     } 
    }
   }
   
   editUser(user: User){
   
     for (let i = 0; i < this.lista.length; i++) {
   
       if(user === this.lista[i]){
   
         this.lista.splice(i,1, user)
       }
     }
   }
   

  login(user) : boolean{
    let response = false;
    for (let i = 0; i < this.lista.length; i++) {
      if(user.email === this.lista[i].email && user.senha === this.lista[i].senha){
        response = true
        } console.log('jequelia abusada e chata')
    }
    return response
  }



}


