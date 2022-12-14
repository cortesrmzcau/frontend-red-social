import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../../models/tb-usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  formLogin = new FormGroup({
    usuario: new FormControl('cesar', Validators.email),
    password: new FormControl('123', Validators.minLength(6))
  });

  constructor(
    private _router: Router,

  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.formLogin.value)
    if(this.formLogin.value.usuario != "") {
      this._router.navigate(['/home']);
      this.user = {
        idUsuario: '8',
        nombre: String(this.formLogin.value.usuario),
        passwordUsuario: String(this.formLogin.value.password)
      }
      localStorage.setItem('usuario', JSON.stringify(this.user));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario o password incorrectos'
      });
    }
  }
}
