import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppService} from './services/app.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartiesComponent } from './components/parties/parties.component';
import { VoterComponent } from './components/voter/voter.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { AddPartieComponent } from './components/add-partie/add-partie.component';
import { ListPartieComponent } from './components/list-partie/list-partie.component';
import { ErrorComponent } from './components/error/error.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PartiesComponent,
    VoterComponent,
    ResultatComponent,
    AddPartieComponent,
    ListPartieComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
