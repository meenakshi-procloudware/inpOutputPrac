import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() val:string = "";
  @Output() res = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
    setInterval(()=>{
      this.res.emit("angular");
    },2000)

  }

}
