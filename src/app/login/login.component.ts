import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: LoginModel = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  changePage(form: NgForm) {

  }

}
