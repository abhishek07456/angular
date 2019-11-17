import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   
   public isDisabled:boolean=true;
   userlist=[];
   age=[];

  constructor() { 
    this.userlist[0]="abhishek";
    this.age[0]=18;
    this.userlist[1]="abhishekv vaggarwal";
    this.age[1]=20;

    this.userlist[2]="abhishek aroar";
    this.age[2]=31;

  }

  ngOnInit() {
  }
  public userchange(event){
    console.log(event.target.value);
    alert("selected user is"+ event.target.value);
  }
  public toggle(){
    this.isDisabled=!this.isDisabled;
  }
  
  public color="show";
  public danger=true;
  public normal=true;
  public italic=true;
  message={

     "normal":!this.normal,
     "danger":this.danger,
     "italic":this.italic
  }

}
