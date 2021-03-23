import { Component, OnInit } from '@angular/core';
import { Partie } from 'src/app/models/Partie';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-list-partie',
  templateUrl: './list-partie.component.html',
  styleUrls: ['./list-partie.component.scss']
})
export class ListPartieComponent implements OnInit {

  public parties:Array<Partie>;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.parties = this.service.getParties();
  }

  public onClick(nom:String):void{
    this.service.supprimerPartie(nom);
  }

}
