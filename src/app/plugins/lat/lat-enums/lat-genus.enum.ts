import {Genus} from "../../../interfaces/vocs/genus.interface";
import {Case} from "../../../interfaces/vocs/case.interface";
import {Numerus} from "../../../interfaces/vocs/numerus.interface";

const latGenusNoun: {[K in keyof Genus]: {[K in keyof Numerus]: { [K in keyof Case]: string }}} = {
    masculine: {
        singular: {
            nominative: "us",
            genetive: "i"
        }
    },
    feminine: {
        singular: {
            nominative: "a",
            genetive: "ae"
        }
    },
    neuter: {
        singular: {
            nominative: "um",
            genetive: "i"
        }
    }
}
export {latGenusNoun};
