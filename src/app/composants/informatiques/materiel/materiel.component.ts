import { Materiel } from './../../../models/materiel';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'nou-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
 // tslint:disable-next-line: no-input-rename
 @Input('materiel') t: Materiel;
  constructor() { }

  ngOnInit(): void {
  }

}
