import { Component, OnInit } from '@angular/core';
import { CarriersService } from './carriers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styleUrls: ['./carriers.component.scss']
})

export class CarriersComponent implements OnInit {
    carriers: Observable<any>;
    displayFormForCarrier: string;

    constructor(
        private carrierService: CarriersService
    ) {}

    ngOnInit() {
        this.carriers = this.carrierService.getCarriers();
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
                this.carriers = this.carrierService.getCarriers();
            });
    }
}
