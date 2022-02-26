import {Vocabulary} from "./vocs/vocabulary.interface";
import {Noun} from "./vocs/noun.interface";
import {Adjective} from "./vocs/adjective.interface";

export interface PluginData {
    wordForms: Array<string>,
    wordKeyForms: {[key: string]: string},
    extraAttributes: Array<string>
}

export interface Plugin {
    id: string,

    detectNoun: (data: PluginData) => Noun | undefined,
    detectAdjective: (data: PluginData) => Adjective | undefined
}
