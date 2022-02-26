import { Injectable } from '@angular/core';
import {Language, LanguageMetadata} from "../../interfaces/language/language.interface";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private curLanguage = "de_DE";
    public language: Language = {
        homepage: {
            title: "",
            startNow: ""
        },
        boxCreation: {
            boxName: "",
            boxLanguage: ""
        }
    }

    constructor() {
        this.loadConfig();
    }

    private async loadConfig(): Promise<void> {
        const availableLanguages: Array<LanguageMetadata> = (await (await fetch("/assets/configs/lang/languages.json")).json()).languages;

        let languageMetadata: LanguageMetadata | undefined = undefined;
        for (const language of availableLanguages) {
            if (language.path.toLowerCase() !== this.curLanguage.toLowerCase()) continue;
            languageMetadata = language;
        }

        if (languageMetadata !== undefined) {
            for (const languagePartKey in this.language) {
                const path = `/assets/configs/lang/${languageMetadata.path}/${languagePartKey}.json`;
                const languagePart: {[key: string]: any} = await (await fetch(path)).json();
                for (const key in languagePart) {
                    this.language[languagePartKey][key] = languagePart[key];
                }
            }
        }


        console.log("finished loading language: ", this.language, availableLanguages);
    }
}
