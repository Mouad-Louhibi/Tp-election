import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Partie } from 'src/app/models/Partie';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})

export class ResultatComponent implements OnInit {

  public parties:Array<Partie>;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.winner();
    this.parties = this.service.getParties();
  }

  public winner():void{
    this.parties = this.service.getParties();

    let max:number;
    let i:number;
    let index:number;
    let flag:boolean;
    
    max = this.parties[0].votes.length;
    flag = false;

    for (let partie of this.parties) {
      if(partie.votes.length != 0)
        flag = true;
    }

    for(i = 0; i < this.parties.length; i++){
      if(this.parties[i].votes.length > max){
        max = this.parties[i].votes.length;
        index = i;
      }
    }
    
    this.service.resetWin();

    if(flag == true)
      this.parties[index].win = true;
  }
}