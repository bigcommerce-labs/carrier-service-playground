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
      console.log(carrier);
      this.carrier = carrier;
      this.configurations = configurations;
    });
  }

  updateCarrier(event: any) {
    const { id, payload } = event;
    this.carrierService.updateCarrier(id, payload)
      .subscribe(res => {
        Object.assign(this.carrier, res);
      });
  }

  backToCarriers() {
    this.router.navigate(['../carriers']);
  }
}
