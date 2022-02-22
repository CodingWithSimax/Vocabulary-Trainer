import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public menuTriggered = false;

    constructor() { }

    public ngOnInit(): void {
    }

    public async triggerMenu(): Promise<void> {
        this.menuTriggered = !this.menuTriggered;
    }
}
