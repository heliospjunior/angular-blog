import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string ="";
  @Input()
  cardDescription:string = "";
  
  constructor() { }

  ngOnInit(): void {

  }

}
