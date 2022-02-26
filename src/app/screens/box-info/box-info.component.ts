import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../../services/config/config.service";
import {Box} from "../../interfaces/vocs/box.interface";
import {detectAttributes} from "../../plugins/default/default.plugin";
import {Plugin} from "../../interfaces/plugin.interface";
import {plugins} from "../../plugins/plugins";

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss']
})
export class BoxInfoComponent implements OnInit {
    public currentBox: Box | undefined = undefined;
    private newValue: string | undefined = undefined;

    constructor(
        private configService: ConfigService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    public ngOnInit(): void {
        const boxIDParam = this.activatedRoute.snapshot.paramMap.get("boxID");
        if (boxIDParam !== null) {
            const boxID: number = parseInt(boxIDParam);
            console.log("Loading box with ID:", boxID);
            const box: Box | undefined = this.configService.config.boxes.find(box => box.id === boxID);
            if (box !== undefined) {
                this.currentBox = box;
                console.log("Loaded box:", this.currentBox);
                this.update();
                return;
            }
        }
        console.log("error while loading box data; returning...");;
        this.router.navigate(["/", "boxes"]);
    }

    public async inputChange(target: EventTarget): Promise<void> {
        this.newValue = (<HTMLInputElement>target).value;
    }

    private async update(): Promise<void> {
        if (this.newValue !== undefined) {
            this.onValueUpdate(this.newValue);
            this.newValue = undefined;
        }
        setTimeout(this.update.bind(this), 1);
    }
    private async onValueUpdate(value: string): Promise<void> {
        if (this.currentBox === undefined) return;
        const attributes = detectAttributes(value);
        const language = this.currentBox.language;

        const plugin: Plugin | undefined = plugins.find(plugin => plugin.id === language);

        if (plugin !== undefined) {
            const noun = plugin.detectNoun(attributes);
            const adjective = plugin.detectAdjective(attributes);

            console.log("NOUN: ", noun, "ADJECTIVE: ", adjective);
        }
    }
}
