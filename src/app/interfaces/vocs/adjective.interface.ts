import {Genus} from "./genus.interface";
import {Case} from "./case.interface";

export interface Adjective {
    type: "adjective",
    forms: {
        [K in keyof Genus]: {
            [K in keyof Case]: string | undefined
        }
    }
}
