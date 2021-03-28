import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Citoyen } from 'src/app/models/Citoyen';
import { Partie } from 'src/app/models/Partie';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  public form:FormGroup;
  private citoyen:Citoyen;
  public parties:Array<Partie>;

  constructor(private service:AppService) {
  }

  ngOnInit(): void {

    this.parties = this.service.getParties();

    this.form=new FormGroup({
      cin:new FormControl('', [Validators.required, Validators.minLength(10)]),
      nom:new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom:new FormControl(),
      partieNom:new FormControl()
    })
  }

  public onSubmit():void{
    this.citoyen = new Citoyen(this.form.controls['cin'].value,
                               this.form.controls['nom'].value, 
                               this.form.controls['prenom'].value);
    this.service.voter(this.citoyen, this.form.controls['partieNom'].value)  
    this.form.reset()
  }
}

class DropdownMenu {
  dropdownMenu: HTMLSelectElement;
  options: HTMLOptionsCollection;

  constructor(dropdown: HTMLSelectElement) {
      this.dropdownMenu = dropdown;
      this.options = dropdown.options;
      }

  OnChange() {
      alert(this.options[this.options.selectedIndex].value);
      document.location.href = this.options[this.options.selectedIndex].value;
  } 

}


window.onload = () => {
  let select1: HTMLSelectElement = <HTMLSelectElement>document.getElementById("Select1");
  let ddm1: DropdownMenu = new DropdownMenu(select1);
  select1.onchange = () => {
      ddm1.OnChange(); 
  }  
}
