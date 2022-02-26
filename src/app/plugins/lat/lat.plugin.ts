import {Plugin, PluginData} from "../../interfaces/plugin.interface";
import {Noun} from "../../interfaces/vocs/noun.interface";
import {Adjective} from "../../interfaces/vocs/adjective.interface";
import {checkNounLat} from "./noun-lat.plugin";

export class Latin implements Plugin {
    public id = "LAT";

    public detectNoun(data: PluginData): Noun | undefined {
        return checkNounLat(data);
    }

    public detectAdjective(data: PluginData): Adjective | undefined {
        return  undefined;
    }
}
