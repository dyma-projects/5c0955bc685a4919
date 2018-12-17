import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
  
})
export class Exercice1Component implements OnInit {
	public Name: String;
	public bColor: string = "transparent";

  constructor() { }

  ngOnInit() {
  }


  validColor(bColor: string): void{

  	this.bColor = bColor;

 	}

  
}
