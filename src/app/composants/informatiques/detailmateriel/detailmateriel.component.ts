import { MaterielService } from 'src/app/Services/materiel.service';
import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({

  selector: 'nou-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  materiel:Materiel;




nouns:boolean=false;


onclick(){
  this.nouns = !this.nouns;
}



constructor(private materielservice:MaterielService) { }

ngOnInit(): void {

  this.materiel= this.materielservice.getMaterielById('2');

}



}
