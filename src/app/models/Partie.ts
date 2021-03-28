import { Citoyen } from "./Citoyen";

export class Partie{
    
   public nom:String;
   public description:String;
   public dateCreation:String;
   public votes:Array<Citoyen>;
   public win:boolean;

    public constructor(nom="",description="",dateCreation="")
    {
        this.votes=new Array<Citoyen>();
        this.nom=nom;
        this.description=description;
        this.dateCreation=new Date().toString();
        this.win = false;
    }
}