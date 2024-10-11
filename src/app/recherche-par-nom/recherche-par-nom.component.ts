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
  allParfums! : Parfum[];
  searchTerm!: string;
  
  constructor(private parfumService : ParfumService) { }

  ngOnInit(): void {
    this.parfumService.listeParfum().subscribe(pars => {
      console.log(pars);
      this.parfums = pars;
      });
      
  }
  rechercherPars(){
    this.parfumService.rechercherParNom(this.nomParfum).
    subscribe(pars => {
    this.parfums = pars; 
    console.log(pars)});
    }
    onKeyUp(filterText : string){
      this.parfums = this.allParfums.filter(item =>
        item.nomParfum?.toLowerCase().includes(filterText));
      }
      
}