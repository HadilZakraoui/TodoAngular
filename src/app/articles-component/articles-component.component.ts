import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  titre='Les articles du jour';
  listeArticles=[
  {titre:'Le championnat du monde',contenu:'Le champion de cette annee est',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
  {titre:'Les nouveaux parents',contenu:'Les nouveau parent',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
  {titre:'Comment ecrire votre CV',contenu:'Pour reussir a decraucher un emploi',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
  ]

  color='blue';
  constructor(){

  }
  
  ngOnInit(){
    this.calcul();

  }

  somme : any=0;
  calcul():any {
      return this.somme= this.listeArticles.filter(e=>e.categorie!='travail').length

  }
}
