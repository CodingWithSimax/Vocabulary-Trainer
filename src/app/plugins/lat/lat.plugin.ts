import {Plugin, PluginData} from "../../interfaces/plugin.interface";
import {Noun} from "../../interfaces/vocs/noun.interface";
import {Adjective} from "../../interfaces/vocs/adjective.interface";

export class Latin implements Plugin {
    public id = "LAT";

    public detectNoun(data: PluginData): Noun | undefined {
        console.log("NOUN CHECK: ", data);
        return undefined;
    }

    public detectAdjective(data: PluginData): Adjective | undefined {
        return  undefined;
    }
}
