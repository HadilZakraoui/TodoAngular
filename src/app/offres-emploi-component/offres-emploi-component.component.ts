import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
 
 listEmploi=[
  {id:1 , titre:'Analyste',entreprise:'vermeg' , etat:true},
  {id:2 , titre:'Developpeur',entreprise:'sofrecom' , etat:false},
  {id:3 , titre:'Manager',entreprise:'EY' , etat:true},

 ]
 searchText:any
 
constructor(){}

 ngOnInit(): void {
  
  // this.calcul();
 }

 somme : any=0;
 calcul():any {
     return this.somme= this.listEmploi.filter(e=>e.etat==true).length

 }

 

 


}
