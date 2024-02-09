import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg";
  @Input()
  cardTitle:string = "Nova Série anunciada";

  @Input()
  Id:string = "0";

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
