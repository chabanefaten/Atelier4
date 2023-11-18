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
    this.parfums = this.parfumService.listeParfums();
   }

    supprimerParfum(p: Parfum)
{
       //console.log(p);
       let conf = confirm("Etes-vous sûr ?");
        if(conf)
           this.parfumService.supprimerParfum(p);

}
}
