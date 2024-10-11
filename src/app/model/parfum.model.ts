import { Type } from "./type.model";

export class Parfum {
    idParfum?: number;
    nomParfum?: string;
    prixParfum?: number;
    dateCreation?: Date;
    type!: Type;

    constructor(
        idParfum?: number,
        nomParfum?: string,
        prixParfum?: number,
        dateCreation?: Date,
        type?: Type,
    
    ) {
        this.idParfum = idParfum;
        this.nomParfum = nomParfum;
        this.prixParfum = prixParfum;
        this.dateCreation = dateCreation;
        this.type = type!;
    
    }
}
