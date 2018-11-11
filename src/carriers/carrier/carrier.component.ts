import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarriersService } from '../carriers.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  private carrier: any;

  constructor(
    private carrierService: CarriersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.carrierService.getCarrierById(params.id))
    ).subscribe(res => {
      this.carrier = res;
    });
  }

  updateCarrier(event: any) {
    const { id, payload } = event;
    this.carrierService.updateCarrier(id, payload)
      .subscribe(res => {
        Object.assign(this.carrier, res);
      });
  }

  createCarrier(event: any) {
    this.carrierService.createCarrier(event)
      .subscribe(res => {
        Object.assign(this.carrier, res);
      });
  }

  backToCarriers() {
    this.router.navigate(['../carriers']);
  }

  toggleCarrierConfigForm() {
    console.log('toggle');
  }
}
