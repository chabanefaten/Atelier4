import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-parfum',
  templateUrl: './add-parfum.component.html'
})
export class AddParfumComponent implements OnInit {
  newParfum: Parfum = new Parfum(); 
  types!: Type[];
  newIdTyp!: number; 
  newType!:Type;
  message!: string;

  constructor(
    private parfumService: ParfumService,
    private router: Router)
    {}

  ngOnInit(): void {
    this.parfumService.listeTypes().
    subscribe(typs=> {this.types = typs;
      console.log(typs);                    
      }
    
    );
  }

  addParfum(): void {
    this.newParfum.type=this.types.find(typ=>typ.idTyp==this.newIdTyp)!;

            this.parfumService.ajouterParfum(this.newParfum)
            .subscribe( pars=> { console.log(pars);
            this.router.navigate(['parfums']);
          });
  
        }}