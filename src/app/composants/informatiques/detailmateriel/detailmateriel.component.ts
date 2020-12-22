import { MaterielService } from 'src/app/Services/materiel.service';
import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

  selector: 'nou-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  materiel:Materiel;
  id:number;



nouns:boolean=false;


onclick(){
  this.nouns = !this.nouns;
}

onAccueil()
{
this.router.navigate(['/listmateriel']);
}



constructor(private materielservice:MaterielService,private activatedRoute:ActivatedRoute,private router:Router) { }

ngOnInit(): void {

  this.materiel= this.materielservice.getMaterielById(this.activatedRoute.snapshot.params['id']);


}



}
