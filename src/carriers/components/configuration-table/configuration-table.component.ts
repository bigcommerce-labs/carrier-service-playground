import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-configuration-table',
    templateUrl: './configuration-table.component.html',
    styleUrls: ['./configuration-table.component.scss']
})
export class ConfigurationTableComponent implements OnInit {

    @Input()
    configurations: any[];

    @Output()
    showForm = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    showFormEvent(configuration) {
        this.showForm.emit(configuration);
    }

}
