import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigurationService {
    private API_URL = (id) => `/api/${id}/configs`;

    constructor(
        private http: HttpClient
    ) {}

    createConfiguration(payload: any, id: number) {
        payload.supported_origin_countries = [payload.supported_origin_countries];
        payload.settings_schema = JSON.parse(payload.settings_schema);
        return this.http.post(
            `${this.API_URL(id)}`, payload)
        .pipe(
            map((res: any) => res)
        );
    }
}
