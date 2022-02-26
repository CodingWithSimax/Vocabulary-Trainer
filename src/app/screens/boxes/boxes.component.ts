import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config/config.service";

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
    constructor(
        public configService: ConfigService
    ) { }

    public ngOnInit(): void {
    }


}
