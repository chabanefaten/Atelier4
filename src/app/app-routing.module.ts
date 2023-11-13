import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumsComponent } from './parfums/parfums.component';
import { AddParfumComponent } from './add-parfum/add-parfum.component';
import { UpdateParfumComponent } from './update-parfum/update-parfum.component';

const routes: Routes = [
  {path: "parfums", component : ParfumsComponent},
  {path: "add-parfum", component :AddParfumComponent },
  {path: "updateParfum/:id", component: UpdateParfumComponent},
  { path: "", redirectTo: "parfums", pathMatch: "full" }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  