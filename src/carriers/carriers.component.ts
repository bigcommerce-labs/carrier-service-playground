import { Component, OnInit } from '@angular/core';
import { CarriersService } from './carriers.service';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styleUrls: ['./carriers.component.scss']
})

export class CarriersComponent implements OnInit {
    carriers: any[];
    hidePage = false;

    constructor(
        private carrierService: CarriersService,
    ) {}

    ngOnInit() {
        this.carrierService.getCarriers()
            .subscribe(res => {
                this.carriers = res;
            });
    }
}
