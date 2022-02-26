import {Vocabulary} from "./vocabulary.interface";

export interface Box {
    name: string,
    language: string,
    id: number,
    vocabularies: Array<Vocabulary>
}
