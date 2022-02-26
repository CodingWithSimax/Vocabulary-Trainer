import {Plugin} from "../interfaces/plugin.interface";
import {Latin} from "./lat/lat.plugin";

const plugins: Array<Plugin> = [
    new Latin()
]
export {plugins};
