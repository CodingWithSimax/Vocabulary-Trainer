import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { BoxesComponent } from './boxes/boxes.component';
import { CreateBoxesComponent } from './create-boxes/create-boxes.component';
import { BoxInfoComponent } from './box-info/box-info.component';



@NgModule({
    declarations: [
        HomepageComponent,
        NavbarComponent,
        BoxesComponent,
        CreateBoxesComponent,
        BoxInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomepageComponent,
        NavbarComponent
    ]
})
export class ScreensModule { }
