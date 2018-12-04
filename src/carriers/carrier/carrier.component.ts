import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarriersService } from '../carriers.service';
import { ConfigurationService } from '../carrier-config.service';
import { switchMap, map, } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-carrier',
    templateUrl: './carrier.component.html',
    styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
    private carrier: any;
    private configurations: any;
    private editing = false;
    private chosenConfiguratoion = {};
    private editingConfigForm = false;

    constructor(
        private carrierService: CarriersService,
        private configurationService: ConfigurationService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap(params => forkJoin(
            this.carrierService.getCarrierById(params.id),
            this.configurationService.getConfiguration(params.id)
            ))
        ).subscribe(([carrier, configurations]) => {
            this.carrier = carrier;
            this.configurations = configurations;
        });
    }

    get isEditing() {
        return this.editing;
    }

    get displayConfigurationForm() {
        return this.editingConfigForm;
    }

    updateCarrier(event: any) {
        const { id, payload } = event;
        this.carrierService.updateCarrier(id, payload)
            .subscribe(res => {
                Object.assign(this.carrier, res);
                this.toggleEditing();
            });
    }

    toggleEditing() {
        this.editing = !this.editing;
    }

    hideConfigForm() {
        this.editingConfigForm = false;
    }

    backToCarriers() {
        this.router.navigate(['../carriers']);
    }

    showConfigForm(configuration) {
        this.chosenConfiguratoion = configuration;
        this.editingConfigForm = true;
    }
}
