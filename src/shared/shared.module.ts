import { NgModule, ModuleWithProviders } from '@angular/core';

import { AWSS3Service } from './aws-s3.sevice';

import { COUNTRIES_DATA, CountriesData } from './countries-data.model';

@NgModule({
    declarations: [],
    providers: [],
    exports: [],
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AWSS3Service,
                { provide: COUNTRIES_DATA, useValue: CountriesData }
            ]
        };
    }
}
