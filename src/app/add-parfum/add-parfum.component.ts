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
      this.types = this.parfumService.listeTypes();

  }
  addParfum(){
    console.log(this.newParfum);

    this.newType=this.parfumService.consulterTypes(this.newidTyp);
    this.newParfum.type = this.newType;
    this.parfumService.ajouterParfum(this.newParfum);
    this.message = "Parfum " + this.newParfum.nomParfum + " ajouté avec succés ! ";
    this.router.navigate(["parfums"]);
      
    }
    

}
