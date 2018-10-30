import { Component, OnInit } from '@angular/core';
import { CarriersService } from './carriers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styleUrls: ['./carriers.component.scss']
})

export class CarriersComponent implements OnInit {
    carriers: any[];
    displayFormForCarrier: string;

    constructor(
        private carrierService: CarriersService
    ) {}

    ngOnInit() {
        this.carrierService.getCarriers()
            .subscribe(res => {
                this.carriers = res;
            });
    }

    displayCarrierForm(carrier: any) {
        this.displayFormForCarrier = carrier.id;
    }

    resetCarrierForm() {
        this.displayFormForCarrier = '';
    }

    updateCarrier(event: any) {
        const { id, payload } = event;
        this.carrierService.updateCarrier(id, payload)
            .subscribe(res => {
                this.resetCarrierForm();
                Object.assign(
                    this.carriers[this.carriers.findIndex(
                        carrier => carrier.id === res.id)],
                    res
                );
            });
    }
}
