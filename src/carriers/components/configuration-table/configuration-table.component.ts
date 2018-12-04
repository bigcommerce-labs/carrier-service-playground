import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-configuration-table',
    templateUrl: './configuration-table.component.html',
    styleUrls: ['./configuration-table.component.scss']
})
export class ConfigurationTableComponent implements OnInit {

    @Input()
    configurations: any[];

    constructor() { }

    ngOnInit() {
    }

}
