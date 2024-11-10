import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
})
export class ListeTypesComponent implements OnInit {

  types!: Type[]; 
  ajout:boolean=true;
  updatedTyp: Type = { idTyp: 0, nomTyp: "" }; // Type mis à jour

  constructor(private parfumService: ParfumService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

  chargerTypes(): void {
    this.parfumService.listeTypes().subscribe(
      typs => {
        this.types = typs;
        console.log('Types récupérés:', typs); // Log des types récupérés
      },
      error => {
        console.error('Erreur lors de la récupération des types:', error); // Gestion des erreurs
      }
    );
  }

  typeUpdated(typ: Type): void {
    console.log("Type reçu du composant updateType:", typ);
    this.parfumService.ajouterType(typ).subscribe(
      () => {
        console.log('Type ajouté avec succès.'); // Confirmation d'ajout
        this.chargerTypes(); // Recharger les types
      },
      error => {
        console.error('Erreur lors de l\'ajout du type:', error); // Gestion des erreurs
      }
    );
  }



  updateTyp(typ:Type) {
    this.updatedTyp=typ;
    this.ajout=false; 
    }
    
}
