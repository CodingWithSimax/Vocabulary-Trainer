import {Homepage} from "./homepage.interface";

export interface Language {
    homepage: Homepage,

    [key: string]: any,
}

export interface LanguageMetadata {
    name: string,
    path: string
}
