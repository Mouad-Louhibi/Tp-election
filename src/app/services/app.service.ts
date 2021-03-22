import { Injectable } from '@angular/core';
import {Citoyen} from '../models/Citoyen'
import {Partie} from '../models/Partie'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public parties:Array<Partie>;
  constructor() { 
    this.parties=new Array<Partie>();
  }
  // parties 
  public ajouterPartie(partie:Partie):boolean{
    for(let i=0;i<this.parties.length;i++)
      if(this.parties[i].nom==partie.nom)
        return false;
    
    this.parties.push(partie);
    return true;
  }
  public supprimerPartie(nomPartie:String):boolean{
    for(let i=0;i<this.parties.length;i++)
        if(this.parties[i].nom==nomPartie)
        {
          this.parties.splice(i,1);
          return true;
        }
      
    return false;
  }
  public getParties():Array<Partie>{
    return this.parties;
  }
  // Citoyen
  public voter(citoyen:Citoyen,nomPartie:String):boolean{//POJO
    for(let i=0;i<this.parties.length;i++)
      {
        for(let j=0;j<this.parties[i].votes.length;j++)
        {
          if(this.parties[i].votes[j].cin==citoyen.cin)
            return false;
        }
      }
    for(let i=0;i<this.parties.length;i++)
      if(this.parties[i].nom==nomPartie)
      { 
        this.parties[i].votes.push(citoyen);
        return true;
      }
    return false;
  }
}
