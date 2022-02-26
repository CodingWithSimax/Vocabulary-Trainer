import {Genus} from "./genus.interface";
import {Case} from "./case.interface";
import {Numerus} from "./numerus.interface";

export interface Noun {
    type: "noun",
    specialForm?: string,
    genus: keyof Genus,
    forms: {
        [K in keyof Numerus]: {
            [K in keyof Case]: string | undefined
        }
    }
}
