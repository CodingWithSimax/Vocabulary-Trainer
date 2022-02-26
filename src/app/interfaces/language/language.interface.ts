import {Homepage} from "./homepage.interface";
import {BoxCreation} from "./box-creation.interface";

export interface Language {
    homepage: Homepage,
    boxCreation: BoxCreation

    [key: string]: any,
}

export interface LanguageMetadata {
    name: string,
    path: string
}
