import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  parfums : Parfum[]; 
  types! : Type[];
  

  constructor()
    
    { 
    this.types = [ {idTyp : 1, nomTyp: "Aromatique"},
                   {idTyp : 2, nomTyp : "Fleurie"}
                 ]; 
    this.parfums = [
      {idParfum : 1, nomParfum : "Yves Saint Laurent", prixParfum : 495.001, 
      dateCreation : new Date("08/10/1987"), type : {idTyp : 1, nomTyp: "Aromatique"}},
      {idParfum : 2,  nomParfum : "Miss Dior", prixParfum : 537.001,
       dateCreation : new Date("01/12/1947"), type:{idTyp : 2, nomTyp : "Fleurie"}},
      {idParfum : 3,  nomParfum  :"Dior Sauvage", prixParfum: 738.001,
       dateCreation : new Date("01/01/1966"), type : {idTyp : 1, nomTyp: "Aromatique"}}
    ];
  }

  listeParfums():Parfum[]
  {
    return this.parfums;

  }


  ajouterParfum(parfum : Parfum){
    // console.log(this.newProduit);
    this.parfums.push(parfum);
    
}

supprimerParfum( p: Parfum){
  //supprimer le parfum prod du tableau produits
  const index = this.parfums.indexOf(p, 0);
  if (index > -1) {
  this.parfums.splice(index, 1);
  }
  //ou Bien
  /* this.parfums.forEach((cur, index) => {
  if(p.idParfum === cur.idParfum) {
  this.parfums.splice(index, 1);
  }
  }); */
  }
  consulterParfum(id:number): Parfum{
    return this.parfums.find(p => p.idParfum == id)!;
    
    }
  updateParfum(p:Parfum)
{
// console.log(p);
this.supprimerParfum(p);
this.ajouterParfum(p);
this.trierParfums();
}
trierParfums(){
  this.parfums = this.parfums.sort((n1,n2) => {
  if (n1.idParfum! > n2.idParfum!) {
  return 1;
  }
  if (n1.idParfum! < n2.idParfum!) {
  return -1;
  }
  return 0;
  });
  }

  listeTypes():Type[] {
    return this.types;
    }
    consulterTypes(id:number): Type{ 
    return this.types.find(typ => typ.idTyp == id)!;
    }
    




}