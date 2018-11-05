import { Component, OnInit } from '@angular/core';
import { CarriersService } from './carriers.service';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styleUrls: ['./carriers.component.scss']
})

export class CarriersComponent implements OnInit {
    carriers: any[];
    displayFormForCarrier: string;
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

    displayCarrierForm(carrier: any) {
        this.displayFormForCarrier = carrier.id;
    }

    resetCarrierForm() {
        this.displayFormForCarrier = '';
    }

    toggleAddNewForm() {
        this.hidePage = !this.hidePage;
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

    createCarrier(event: any) {
        this.carrierService.createCarrier(event)
            .subscribe(res => {
                this.carriers.push({...res});
                this.toggleAddNewForm();
            });
    }
}
