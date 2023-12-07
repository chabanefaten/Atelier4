import { Component, OnInit} from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { Type } from '../model/type.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-parfum',
  templateUrl: './add-parfum.component.html'
})
export class AddParfumComponent implements OnInit{
  newParfum = new Parfum();
  message! :String;
  types! : Type[];
  newidTyp! : number;
  newType! : Type;




  constructor(private parfumService: ParfumService,
             private activatedRoute: ActivatedRoute,
             private router :Router
    
    )
  {}


  ngOnInit(): void {
    this.parfumService.listeTypes().
subscribe(typs => {this.types = typs;
console.log(typs);
});


  }
 
    addParfum(){
      this.newParfum.type = this.types.find(typ => typ.idTyp == this.newidTyp)!;
      this.parfumService.ajouterParfum(this.newParfum)
      .subscribe(par => {
      console.log(par);
      this.router.navigate(['parfums']);
      });
      }
    }
