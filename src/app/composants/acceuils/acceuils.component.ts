import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nou-acceuils',
  templateUrl: './acceuils.component.html',
  styleUrls: ['./acceuils.component.css']
})
export class AcceuilsComponent implements OnInit {
  nomSupermarket: string = "Chez Nous";

  lesCategories= [
    {nom:'informatique', image:'assets/informatique.jpg'},
    {nom:'alimentation', image:'assets/alimentation.jpg'},
    {nom:'vetements', image:'assets/habits.png'},
    {nom:'electroménager', image:'assets/electromenager.jpg'}
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
