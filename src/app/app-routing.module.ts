import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./screens/homepage/homepage.component";
import {BoxesComponent} from "./screens/boxes/boxes.component";
import {CreateBoxesComponent} from "./screens/create-boxes/create-boxes.component";
import {BoxInfoComponent} from "./screens/box-info/box-info.component";

const routes: Routes = [
    {path: "homepage", component: HomepageComponent},
    {path: "boxes", component: BoxesComponent},
    {path: "boxes/create", component: CreateBoxesComponent},
    {path: `boxes/info/:boxID`, component: BoxInfoComponent},

    {path: "**", redirectTo: "homepage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
