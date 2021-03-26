import { Component, OnInit } from '@angular/core';
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
    this.parties = this.service.getParties();
  }
}
