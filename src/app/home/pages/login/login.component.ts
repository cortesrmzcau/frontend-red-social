import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    usuario: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.formLogin.value)
    if(this.formLogin.value.usuario != "") {
      this._router.navigate(['/home']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario o password incorrectos'
      });
    }
  }
}
