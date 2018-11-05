import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CarriersComponent } from './carriers.component';
import { CarrierFormComponent } from './components/carrier-form/carrier-form.component';
import { CarriersService } from './carriers.service';

@NgModule({
    declarations: [
        CarriersComponent,
        CarrierFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule.forRoot()
    ],
    providers: [
        CarriersService
    ],
    exports: [
        CarriersComponent
    ],
})

export class CarriersModule { }
