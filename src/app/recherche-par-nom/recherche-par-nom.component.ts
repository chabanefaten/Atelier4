import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  nomParfum! : string;
  parfums!: Parfum[];
  searchTerm!: string;
  
  constructor(private parfumService : ParfumService) { }

  ngOnInit(): void {
    this.parfumService.listeParfum().subscribe(pars => {
      console.log(pars);
      this.parfums = pars;
      });
      
  }
}