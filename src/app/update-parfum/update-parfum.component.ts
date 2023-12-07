import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumService } from '../services/parfum.service';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-parfum',
  templateUrl: './update-parfum.component.html',
  styleUrls: ['./update-parfum.component.css']
})
export class UpdateParfumComponent implements OnInit{
  currentParfum = new Parfum();
  types! : Type[];
  updatedTypId! : number;

 constructor(private activatedRoute: ActivatedRoute,
             private router :Router,
             private parfumService: ParfumService) 
 {}

 ngOnInit(): void {
    this.parfumService.listeTypes().
    subscribe(typs => {this.types = typs;
    console.log(typs);
    });

  this.parfumService.consulterParfum(this.activatedRoute.snapshot.params['id']).
  subscribe(par =>{ this.currentParfum = par});
  this.updatedTypId =
this.currentParfum.type.idTyp;
   
 }
 

 updateParfum()
 { 
  this.currentParfum.type = this.types.find(typ => typ.idTyp == this.updatedTypId)!;
  this.parfumService.updateParfum(this.currentParfum).subscribe(par => {
    this.router.navigate(['parfums']); }
    );

 }
}
