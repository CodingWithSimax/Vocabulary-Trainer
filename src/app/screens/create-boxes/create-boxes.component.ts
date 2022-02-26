import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language/language.service";
import {ConfigService} from "../../services/config/config.service";
import {Box} from "../../interfaces/vocs/box.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-boxes',
  templateUrl: './create-boxes.component.html',
  styleUrls: ['./create-boxes.component.scss']
})
export class CreateBoxesComponent implements OnInit {
    public currentStep = 1;
    public languages: Array<string> = [];
    private priorityKeycodes: Array<string> = ["GER", "lat", "FRE"];

    constructor(
        public languageService: LanguageService,
        private configService: ConfigService,
        private router: Router
    ) {
        this.loadLanguages();
    }

    public ngOnInit(): void {
    }

    private async loadLanguages(): Promise<void> {
        const result: string = await (await fetch("/assets/configs/languages.txt")).text();
        const resultLanguages: Array<string> = [];
        for (const row of result.split("\n")) {
            const data = row.split("|");
            const unicode = data[0];
            const languageName = data[3];
            const resultString = languageName + " | " + unicode.toUpperCase();
            if (!this.priorityKeycodes.includes(unicode.toUpperCase())) continue;
            resultLanguages.push(resultString);
        }
        for (const row of result.split("\n")) {
            const data = row.split("|");
            const unicode = data[0];
            const languageName = data[3];
            const resultString = languageName + " | " + unicode.toUpperCase();
            if (resultLanguages.includes(resultString)) continue;
            resultLanguages.push(resultString);
        }
        this.languages = resultLanguages;
    }

    public async createBox(): Promise<void> {
        const boxName = (<HTMLInputElement>document.getElementById("box-name")).value;
        if (boxName.trim() === "") {
            (<HTMLInputElement>document.getElementById("box-name")).classList.add("is-invalid");
            return;
        }
        const boxLanguage = (<HTMLInputElement>document.getElementById("box-language")).value.split("|")[1].trim();

        const box: Box = {
            name: boxName,
            language: boxLanguage,
            id: (new Date()).getTime(),
            vocabularies: []
        };
        this.configService.config.boxes.push(box);
        this.configService.saveConfig();

        this.router.navigate(["/", "boxes", "info", `${box.id}`])
    }
}
