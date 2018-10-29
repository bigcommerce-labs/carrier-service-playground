import { Component, OnInit } from '@angular/core';
import { CarriersService } from './carriers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styles: [],
})

export class CarriersComponent implements OnInit {
    title = 'Carrier should be here';
    carriers: Observable<any>;

    constructor(
        private carrierService: CarriersService
    ) {}

    ngOnInit() {
        this.carriers = this.carrierService.getCarriers();
    }

}
