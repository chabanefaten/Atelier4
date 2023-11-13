import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParfumsComponent } from './parfums/parfums.component';
import { AddParfumComponent } from './add-parfum/add-parfum.component';
import { FormsModule } from '@angular/forms';
import { UpdateParfumComponent } from './update-parfum/update-parfum.component';


@NgModule({
  declarations: [
    AppComponent,
    ParfumsComponent,
    AddParfumComponent,
    UpdateParfumComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
