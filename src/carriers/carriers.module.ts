import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CarriersService } from './carriers.service';
import { ConfigurationService } from './carrier-config.service';

import { SharedModule } from '../shared/shared.module';
import { CarriersComponent } from './carriers.component';
import { CarrierFormComponent } from './components/carrier-form/carrier-form.component';
import { CarrierComponent } from './carrier/carrier.component';
import { CarrierConfigurationsComponent } from './components/carrier-configurations/carrier-configurations.component';
import { CarrierNewComponent } from './carrier-new/carrier-new.component';
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';

export const ROUTES: Routes = [
    {
        path: '', component: CarriersComponent
    },
    {
        path: 'new', component: CarrierNewComponent
    },
    {
        path: ':id', component: CarrierComponent,
    },
];

@NgModule({
    declarations: [
        CarriersComponent,
        CarrierFormComponent,
        CarrierComponent,
        CarrierConfigurationsComponent,
        CarrierNewComponent,
        ConfigurationFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ],
    providers: [
        CarriersService,
        ConfigurationService
    ],
    exports: [
        CarriersComponent
    ],
})

export class CarriersModule { }
