import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Type } from '../model/type.model';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  apiURL: string = 'http://localhost:8091/parfums/api';
  apiURLTyp: string = 'http://localhost:8091/parfums/Typ';
  //types! : Type[];
  parfums!: Parfum[];
 
 
  constructor(private http : HttpClient){
     /*  this.types= [
      {idTyp : 1, nomTyp: "Aromatique"},
       {idTyp : 2, nomTyp : "Fleurie"} 
 
      ];   */
  
     this.parfums = [
        { idParfum: 1, nomParfum: "Yves Saint Laurent", prixParfum: 495.001, dateCreation: new Date("08/10/1987"),
                       type: { idTyp: 1, nomTyp: "Aromatique" } },
        { idParfum: 2, nomParfum: "Miss Dior", prixParfum: 537.001, dateCreation: new Date("01/12/1947"),
                       type: { idTyp: 2, nomTyp: "Fleurie" } },
        { idParfum: 3, nomParfum: "Dior Sauvage", prixParfum: 738.001, dateCreation: new Date("01/01/1966"),
                       type: { idTyp: 1, nomTyp: "Aromatique" } }
      ];
  }
 

 
  listeParfum(): Observable<Parfum[]>{
    return this.http.get<Parfum[]>(this.apiURL);
    }
    


ajouterParfum( par: Parfum):Observable<Parfum>{
  return this.http.post<Parfum>(this.apiURL, par, httpOptions);
  }



  supprimerParfum(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

    updateParfum(par :Parfum) : Observable<Parfum>
    {
    return this.http.put<Parfum>(this.apiURL,par, httpOptions);
    }
    
trierParfums(){
  this.parfums = this.parfums.sort((n1,n2) => {
  if (n1.idParfum! > n2.idParfum!) {
  return 1;
  }
  if (n1.idParfum! < n2.idParfum!) {
  return -1;
  }
  return 0;
  });
  }

 
    listeTypes():Observable<Type[]>{
      return this.http.get<Type[]>(this.apiURL+"/typ");
}

    
consulterParfum(id: number): Observable<Parfum> {
const url = `${this.apiURL}/${id}`;
return this.http.get<Parfum>(url);
}

  rechercherParType(idTyp: number): Observable<Parfum[]> {
    const url = `${this.apiURL}/parstyp/${idTyp}`;
    return this.http.get<Parfum[]>(url);
  }


}