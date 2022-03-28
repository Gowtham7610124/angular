import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid:string='';
  password:string='';
  a='gowtham';
  b='9363318493';
  constructor() { }

  ngOnInit(): void {
  }
  

}
