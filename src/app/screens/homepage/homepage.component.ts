import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language/language.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    constructor(
        public languageService: LanguageService,
        private router: Router
    ) { }

    public ngOnInit(): void {
    }

    public async createBox(): Promise<void> {
        this.router.navigate(["/", "boxes", "create"])
    }
}
