import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Partie } from 'src/app/models/Partie';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-partie',
  templateUrl: './add-partie.component.html',
  styleUrls: ['./add-partie.component.scss']
})
export class AddPartieComponent implements OnInit {

  constructor(private service:AppService) { }

  public form:FormGroup;

  ngOnInit(): void {
    this.form=new FormGroup({
      nom:new FormControl('', [Validators.required, Validators.minLength(3)]),
      description:new FormControl()
    })
    
  }

  public onClick():void{
    console.log(this.form);
  }

  public onSubmit():void{
    this.service.ajouterPartie(
      new Partie(this.form.controls['nom'].value, this.form.controls['description'].value))
      this.form.reset()
  }

}
