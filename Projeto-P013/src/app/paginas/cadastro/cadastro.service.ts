import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

// lista : Array<User> = [{nome:'jequelia', cpf:123456, rg:1254, email:'jequelia@adm.com', senha:'123456'},]


constructor(){
  
}


// addUser(user: User){
//   this.lista.push(user)
//   console.log(this.lista)
// }

// delUser(user: User){
//  for (let i = 0; i <this.lista.length; i++) {
   
//   if(user === this.lista[i]){

//     this.lista.splice(i,1)
//   } 
//  }
// }

// editUser(user: User){

//   for (let i = 0; i < this.lista.length; i++) {

//     if(user === this.lista[i]){

//       this.lista.splice(i,1, user)
//     }
//   }
// }

// login(email: string,senha: string) : boolean{
//   let response = false;
//   for (let i = 0; i < this.lista.length; i++) {
//     if(email === this.lista[i].email && senha === this.lista[i].senha){
//       response = true
//       }
//   }
//   return response
// }

}
