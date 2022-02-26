import { Injectable } from '@angular/core';
import {Config} from "../../interfaces/config/config.interface";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    public config: Config;

    constructor() {
        // load config
        const item = localStorage.getItem("config");
        if (item === null) {
            console.log("Config does not exists! Creating...");
            this.config = {
                boxes: []
            }
            this.saveConfig();
            console.log("Created config!");
        } else {
            this.config = JSON.parse(item);
        }
        console.log("loaded config: ", this.config);
    }

    public saveConfig(): void {
        localStorage.setItem("config", JSON.stringify(this.config));
        console.log("written config: ", this.config);
    }
}
