import { ParfumService } from './../services/parfum.service';
import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model';


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
    this.parfumService.listeTypes().
    subscribe(typs=> {this.types = typs;
      console.log(typs);
    });
  }

  onChange() {
    this.parfumService.rechercherParType(this.IdType).
       subscribe(pars => {this.parfums = pars;});
  }
}
