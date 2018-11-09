import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarriersService } from '../carriers.service';
import { switchMap } from 'rxjs/operators';

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
  ) { }

  ngOnInit() {
    this.carrier = this.route.params.pipe(
      switchMap((params: any) => {
        return this.carrierService.getCarrierById(params.id);
      })
    );
  }
}
