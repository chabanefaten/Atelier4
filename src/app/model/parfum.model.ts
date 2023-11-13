import { Type } from "./type.model";

export class Parfum {
    idParfum? : number;
    nomParfum? : string;
    prixParfum? : number;
    dateCreation? : Date ;
    type! : Type;
  
}    