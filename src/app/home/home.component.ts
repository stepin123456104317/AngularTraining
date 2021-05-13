import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  constructor() { }
  
  ngOnInit(): void {
  }
  quantity:number=0
  i=0
  disabled=true
  
plus(){
if(this.i>=0)
{
this.i++;
this.quantity=this.i;
this.disabled=false
}
}
minus()
{
  this.i--;
  this.quantity=this.i;
  if(this.quantity<=0)
  {
    this.disabled=true
  }

}
}
