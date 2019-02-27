import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }
  arr:any;
  
  ngOnInit() {
    
    this.arr= ['1','2',3,4,5,];
    for (var i=0; i<=this.arr.length; i++)
    {
      console.log(this.arr[i]);
    }

   // console.log(JSON.stringify(this.arr));
    
  }

}
