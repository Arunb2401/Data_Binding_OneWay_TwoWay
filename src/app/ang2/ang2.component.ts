import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang2',
  templateUrl: './ang2.component.html',
  styleUrls: ['./ang2.component.css']
})
export class Ang2Component implements OnInit {

  Title="Hello Angular"
  userName=""
  nameError=""
  imgUrl="assets\AngularJS.png"
  Url="https://angular.io/"

 ngOnInit(): void {
  this.Title="Hello From ARUN BIRADAR !!!!"
}
  onClick($event: any){
    console.log("Saved the Info",$event)
    window.open(this.Url,"_blank")
  }
  
  onInput($event: any){
    console.log("Change Event Occurred !!" , $event.data)
    const nameRegex=RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if(nameRegex.test(this.userName)){
      this.nameError=""
      return
    }
    this.nameError = "Name pattern is Incorrect!"
  }

}

 