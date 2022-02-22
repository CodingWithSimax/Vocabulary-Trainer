import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
    declarations: [
        HomepageComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomepageComponent,
        NavbarComponent
    ]
})
export class ScreensModule { }
