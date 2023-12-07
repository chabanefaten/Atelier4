import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html'
})
export class ParfumsComponent implements OnInit {
  parfums? : Parfum[];
 

  constructor(private parfumService : ParfumService,
    public authService: AuthService){
    //this.parfums=[]; 
   
  }

  ngOnInit(): void { 
    this.chargerParfums();
    
   }
   chargerParfums(){
 // this.parfums = this.parfumService.listeParfums();
   this.parfumService.listeParfum().subscribe(pars => {
    console.log(pars);
    this.parfums = pars;
    });

  }

  supprimerParfum(p: Parfum)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.parfumService.supprimerParfum(p.idParfum!).subscribe(() => {
console.log("parfum supprimé");
//this.chargerParfums();
});
} 





}