import {Genus} from "./genus.interface";
import {Case} from "./case.interface";

export interface Noun {
    type: "noun",
    forms: {
        [K in keyof Genus]: {
            [K in keyof Case]: string | undefined
        }
    }
}
