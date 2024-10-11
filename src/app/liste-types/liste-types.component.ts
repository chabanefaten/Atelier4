import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
})
export class ListeTypesComponent implements OnInit {

    types! : Type[];
    
    constructor(private parfumService : ParfumService) { }

    ngOnInit(): void {
      this.parfumService.listeParfum().  // Appel à la méthode qui retourne une liste de parfums
      subscribe(parfums => {
        // Si vous recevez un tableau de types, utilisez-le directement
        this.types = parfums.map(parfum => parfum.type);  // Extraire les types à partir des parfums
        console.log(this.types);
      });
    }
}

