import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigurationService {
    private API_URL = (id) => `/api/${id}/configs`;
    private PUBLISH_API_URL = (carrierId, configId) => `/api/${carrierId}/configs/${configId}/publish`;

    constructor(
        private http: HttpClient
    ) {}

    getConfiguration(carrierId: number) {
        return this.http.get(this.API_URL(carrierId))
            .pipe(map((res) => res));
    }

    createConfiguration(payload: any, id: number) {
        payload.supported_origin_countries = [payload.supported_origin_countries];
        payload.settings_schema = JSON.parse(payload.settings_schema);
        const create = this.http.post(
            `${this.API_URL(id)}`, payload);
        return create.pipe(switchMap((res: any) => this.publishConfig(id, res.id)));
    }

    publishConfig(carrierId: number, configId: number) {
        return this.http.put(this.PUBLISH_API_URL(carrierId, configId), {})
            .pipe(map((res) => res));
    }
}
