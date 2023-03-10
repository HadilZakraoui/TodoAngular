import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  test='1alinfo11'
  color='red';

  listProduct=[
    {id:1, product:"product1",price:"100dt", quantity:0},
    {id:2, product:"product2",price:"100dt", quantity:50}

  ];
  constructor(){}

  ngOnInit(): void {
    
  }
  changeColor(){
    this.color='blue'
  }

  twoway(k:any){
    this.color=k

  }

}
