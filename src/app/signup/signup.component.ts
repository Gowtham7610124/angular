import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public ifclicked = false
  username: string ='';
  lastName: string ='';
  varaity: string ='';
  breed: string ='';
  medRecord: string ='';
  reason: string ='';
  other: string ='';
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  clicked(){
    console.log(this.username,this.lastName,this.varaity,this.breed,this.medRecord,this.reason,this.other);
    this.ifclicked=true;
  }
  
}
