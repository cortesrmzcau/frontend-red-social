import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/tb-usuarios.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('usuario') || "[]");
    console.log(this.user);
  }
}
