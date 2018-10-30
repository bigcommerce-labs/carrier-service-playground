import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class CarriersService {
    private API_URL = '/api';

    constructor(
        private http: HttpClient
    ) {}

    getCarriers(): Observable<any[]> {
        return this.http.get(this.API_URL)
        .pipe(
            map((res: any) => res.data)
        );
    }

    updateCarrier(id: number, payload: any) {
        return this.http.put(
            `${this.API_URL}/${id}`, payload)
            .pipe(
                map((res: any) => res)
            );
    }
}
