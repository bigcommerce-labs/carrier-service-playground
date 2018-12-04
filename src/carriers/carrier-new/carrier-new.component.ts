import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarriersService } from '../carriers.service';
import { ConfigurationService } from '../carrier-config.service';

@Component({
  selector: 'app-carrier-new',
  templateUrl: './carrier-new.component.html',
  styleUrls: ['./carrier-new.component.scss']
})
export class CarrierNewComponent implements OnInit {

  private carrier = {};
  private configuration = {};
  private displayCarrierForm = true;
  private carrierId: number;

  constructor(
    private carrierService: CarriersService,
    private configurationService: ConfigurationService,
    private router: Router,
  ) { }

  ngOnInit() {}

  createCarrier(event: any) {
    this.carrierService.createCarrier(event)
      .subscribe(res => {
        Object.assign(this.carrier, res);
        this.carrierId = res.id;
        this.toggleCarrierConfigForm();
      });
  }

  get carrierFormStatus() {
    return this.displayCarrierForm;
  }

  backToCarriers() {
    this.router.navigate(['../carriers']);
  }

  toggleCarrierConfigForm() {
    this.displayCarrierForm = !this.displayCarrierForm;
  }

  createConfiguration(event: any) {
    this.configurationService.createConfiguration(event, this.carrierId)
      .subscribe(res => {
        this.backToCarriers();
      });
  }
}
