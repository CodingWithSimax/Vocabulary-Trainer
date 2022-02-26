import {PluginData} from "../../interfaces/plugin.interface";
import {Noun} from "../../interfaces/vocs/noun.interface";
import {latGenusNoun} from "./lat-enums/lat-genus.enum";
import {Genus} from "../../interfaces/vocs/genus.interface";

export function checkNounLat(data: PluginData): Noun | undefined {
    // check for default form without ending
    const noun: Noun = {
        type: "noun",
        genus: <any>"unknown",
        forms: {
            singular: {
            },
            plural: {

            }
        }
    }
    if (data.wordForms.length >= 1) {
        const firstWord = data.wordForms[0];
        for (const key in latGenusNoun) {
            const value = (<any>latGenusNoun)[key].singular.nominative;
            if (firstWord.endsWith(value)) {
                noun.genus = <keyof Genus>key;
                (<any>noun.forms.singular).nominative = firstWord;
            }
        }
    } else if (data.wordForms.length > 1) {
        const firstWord = data.wordForms[0];
        const secondWord = data.wordForms[1];
        for (const key in latGenusNoun) {
            const value = (<any>latGenusNoun)[key].singular.genetive;
            if (secondWord === value || secondWord === ("-"+value)) {
                (<any>noun.forms.singular).nominative = firstWord;
                (<any>noun.forms.singular).genetive = secondWord;
                break;
            } else if (secondWord.endsWith(value)) {
                // TODO difference between neutrum und maskulinum
                (<any>noun.forms.singular).nominative = firstWord;
                (<any>noun.forms.singular).genetive = secondWord;
                break;
            }
        }
    }

    console.log(noun);

    return undefined;
}
