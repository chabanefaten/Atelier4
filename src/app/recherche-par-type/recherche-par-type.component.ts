import { ParfumService } from './../services/parfum.service';
import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model';
import { TypeWrapper } from '../model/TypeWrapped.model';


@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styleUrls: ['./recherche-par-type.component.css']
})
export class RechercheParTypeComponent implements OnInit {

  parfums!: Parfum[];
  IdType!: number;
  types!: Type[];

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {
    // S'abonner à la liste des types en utilisant le TypeWrapper
    this.parfumService.listeTypes().subscribe((typs: TypeWrapper) => {
      this.types = typs._embedded.types; // Accéder au tableau types dans l'objet enveloppant
      console.log(typs);
    });
  }

  onChange() {
    // Rechercher des parfums par type sélectionné
    this.parfumService.rechercherParType(this.IdType).subscribe(prods => {
      this.parfums = prods;
    });
  }
}
