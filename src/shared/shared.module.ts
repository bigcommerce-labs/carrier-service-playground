import { NgModule, ModuleWithProviders } from '@angular/core';

import { AWSS3Service } from './aws-s3.sevice';

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
                AWSS3Service
            ]
        };
    }
}
