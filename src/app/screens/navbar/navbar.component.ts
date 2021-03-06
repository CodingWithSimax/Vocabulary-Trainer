import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public menuTriggered = false;

    constructor(
        private router: Router
    ) { }

    public ngOnInit(): void {
    }

    public async triggerMenu(): Promise<void> {
        this.menuTriggered = !this.menuTriggered;
    }
    public async closeScreen(): Promise<void> {
        this.menuTriggered = false;
    }
}
