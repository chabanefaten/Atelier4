import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model'; // Use the Type model directly
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  apiURL: string = 'http://localhost:8080/parfums/api';
  apiURLTyp: string = 'http://localhost:8080/parfums/api/typ';

  parfums!: Parfum[];

  constructor(private http: HttpClient,
              private authservice :AuthService)
   {}

  // Récupérer la liste des parfums
  listeParfum(): Observable<Parfum[]> {
    
  return this.http.get<Parfum[]>(this.apiURL+"/all");

  }

  // Ajouter un parfum
  ajouterParfum( pars: Parfum):Observable<Parfum>{
    let jwt = this.authservice.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Parfum>(this.apiURL+"/addpars", pars, {headers:httpHeaders});
    }

  // Supprimer un parfum par son ID
  supprimerParfum(id : number) {
    const url = `${this.apiURL}/delpars/${id}`;
    let jwt = this.authservice.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.delete(url, {headers:httpHeaders});
    }
    

  // Mettre à jour un parfum
  updateParfum(pars :Parfum) : Observable<Parfum> {
    let jwt = this.authservice.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<Parfum>(this.apiURL+"/updatepars", pars, {headers:httpHeaders});
    }
    

  // Récupérer la liste des types de parfums (direct Type[])
  listeTypes(): Observable<Type[]> {
    let jwt = this.authservice.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Type[]>(this.apiURLTyp,{headers:httpHeaders}
    );
  }
  // Consulter un parfum par son ID
  consulterParfum(id: number): Observable<Parfum> {
    const url = `${this.apiURL}/getbyid/${id}`;
    console.log(url);
    let jwt = this.authservice.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Parfum>(url,{headers:httpHeaders});
    }
    
  
  // Rechercher des parfums par type
  rechercherParType(idTyp: number): Observable<Parfum[]> {
    const url = `${this.apiURL}/parstyp/${idTyp}`;
    return this.http.get<Parfum[]>(url);

  }
 
  // Rechercher des parfums par nom
  rechercherParNom(nom: string): Observable< Parfum[]> {
    const url = `${this.apiURL}/parsByName/${nom}`;
    return this.http.get<Parfum[]>(url);
  }

  ajouterType( typ: Type):Observable<Type>{
    return this.http.post<Type>(this.apiURLTyp, typ, httpOptions);
    }

    consulterType(id: number): Observable<Type> {
      return this.http.get<Type>(`${this.apiURLTyp}/types/${id}`);
    }
    
}
