import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ParfumService } from './services/parfum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parfum';
  constructor(public authService: AuthService,
    private parfumService: ParfumService,
              private router :Router){}

      ngOnInit() {
        this.authService.loadToken();
        if (this.authService.getToken()==null ||this.authService.isTokenExpired())
            this.router.navigate(['/login']);

              }
            
              onLogout(){
                this.authService.logout();
              }
            }