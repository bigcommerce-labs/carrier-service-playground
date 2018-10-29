import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarriersComponent } from './carriers.component';
import { CarriersService } from './carriers.service';

@NgModule({
    declarations: [
        CarriersComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
    ],
    providers: [
        CarriersService
    ],
    exports: [
        CarriersComponent
    ],
})

export class CarriersModule { }
