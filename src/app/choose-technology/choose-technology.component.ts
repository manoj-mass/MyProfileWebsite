import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-choose-technology',
  templateUrl: './choose-technology.component.html',
  styleUrls: ['./choose-technology.component.scss']
})
export class ChooseTechnologyComponent implements OnInit {

  constructor() { }
   allLanguagess = [
     {id:"flutter",img:"assets/fluttericon.png"},
     {id:"swift",img:"assets/swifticon.png"},
     {id:"node",img:"assets/nodeicon.png"},
     {id:"angular",img:"assets/angularicon.svg"},
     {id:"kony",img:"assets/konyicon.png"},
     {id:"wordpress",img:"assets/wordpressicon.png"}];
    allButton = {id:"all",img:"assets/ALL.svg"};
     status : boolean = false;
     allButtonPressed : boolean = false;
     mobileView: boolean = false;


     ngOnInit(): void {
      if(window.innerWidth < 941){
        this.mobileView = true;
      }else{
        this.mobileView = false;
      }


  }

 MovingLanguageIcon(event){
   console.log(event);

 if(event.id != "all" ){
   this.allButtonPressed = false;
  this.status = true
//  if (this.allLanguagess.indexOf(event) > 0) {
//   this.allLanguagess.splice(this.allLanguagess.indexOf(event), 1);
//   this.allLanguagess.unshift(event);
// }
 }else{
  this.status = false;
  this.allButtonPressed = true;
 }
}
 onResize(event){
  if(event < 941){
    this.mobileView = true;
  }else{
    this.mobileView = false;
  }

 }



}
