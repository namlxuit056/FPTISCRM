import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuState:string = 'out';
  
   toggleMenu() {
     // 1-line if statement that toggles the value:
     this.menuState = this.menuState === 'out' ? 'in' : 'out';
   }
}
