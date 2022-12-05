import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignInComponent implements OnInit {

  formSignin = new FormGroup({
    usuario: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.formSignin.value)
    if(this.formSignin.value.usuario != "") {
      //this._router.navigate(['/home']);
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario en existencia'
      });
    }
  }

}
