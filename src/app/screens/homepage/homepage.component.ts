import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language/language.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    constructor(
        public languageService: LanguageService
    ) { }

    public ngOnInit(): void {
    }

}
