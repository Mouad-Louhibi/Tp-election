import { Citoyen } from "./Citoyen";

export class Partie{
    
   public nom:String;
   public description:String;
   public dateCreation:String;
   public votes:Array<Citoyen>;
   public win:boolean;

    public constructor(nom="",description="",dateCreation="")
    {
        //Date:String = new Date();
        this.votes=new Array<Citoyen>();
        this.nom=nom;
        this.description=description;
        this.dateCreation= dateCreation;
        this.win = false;
    }

    

}