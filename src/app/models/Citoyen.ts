export class Citoyen{
    public cin:String;
    public nom:String;
    public prenom:String;

    public constructor(cin="",nom="",prenom="")
    {
        this.cin=cin;
        this.nom=nom;
        this.prenom=prenom;
    }
}