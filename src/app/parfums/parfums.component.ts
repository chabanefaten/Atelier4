import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html'
})
export class ParfumsComponent implements OnInit {
  parfums?: Parfum[];

  constructor(
    private parfumService: ParfumService,
    public authService: AuthService
  ) {}

  ngOnInit(): void { 
    this.chargerParfums();
  }

  chargerParfums() {
    // This calls the service to get the list of perfumes
    this.parfumService.listeParfum().subscribe(pars => {
      console.log('Loaded parfumes:', pars);
      this.parfums = pars;
    }, error => {
      console.error('Error loading parfumes', error);
    });
  }

  supprimerParfum(p: Parfum) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.parfumService.supprimerParfum(p.idParfum!).subscribe(() => {
        console.log("Parfum supprimé");
        this.chargerParfums(); // Refresh list after deletion
      }, error => {
        console.error("Error deleting perfume", error);
      });
    }
  }
}
