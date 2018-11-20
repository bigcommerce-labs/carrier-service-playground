import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarriersService } from '../carriers.service';

@Component({
  selector: 'app-carrier-new',
  templateUrl: './carrier-new.component.html',
  styleUrls: ['./carrier-new.component.scss']
})
export class CarrierNewComponent implements OnInit {

  private carrier = {};
  private configuration = {};
  private displayCarrierForm = true;

  constructor(
    private carrierService: CarriersService,
    private router: Router,
  ) { }

  ngOnInit() {}

  createCarrier(event: any) {
    this.toggleCarrierConfigForm();
    // this.carrierService.createCarrier(event)
    //   .subscribe(res => {
    //     Object.assign(this.carrier, res);
    //     this.toggleCarrierConfigForm();
    //   });
  }

  backToCarriers() {
    this.router.navigate(['../carriers']);
  }

  toggleCarrierConfigForm() {
    this.displayCarrierForm = !this.displayCarrierForm;
  }
}
