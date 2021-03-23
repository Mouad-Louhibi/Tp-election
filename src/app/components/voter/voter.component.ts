import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  public form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      cin:new FormControl('', [Validators.required, Validators.minLength(10)]),
      nom:new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom:new FormControl()
    })
  }

}
