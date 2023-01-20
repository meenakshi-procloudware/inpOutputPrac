import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputOutput';
  titleTwo:string = "ankur Paaji"
  data:string | undefined;
  constructor(){}

  handleEvent(ev:string) {
    console.log("ev",ev)
    this.data = ev;                         
  }
}
