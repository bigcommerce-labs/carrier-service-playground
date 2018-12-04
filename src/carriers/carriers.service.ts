import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CarriersService {
    private API_URL = '/api';
    private carrierChosen: any;

    constructor(
        private http: HttpClient
    ) {}

    getCarriers(): Observable<any[]> {
        return this.http.get(this.API_URL)
        .pipe(
            map((res: any) => res.data)
        );
    }

    getCarrierById(id: number): Observable<any> {
        if (!id) {
            return of({});
        }
        return this.http.get(`${this.API_URL}/${id}`)
            .pipe(map(res => {
                this.carrierChosen = Object.assign({}, res);
                return res;
            }));
    }

    updateCarrier(id: number, payload: any) {
        return this.http.put(
            `${this.API_URL}/${id}`, payload)
            .pipe(
                map((res: any) => res)
            );
    }

    createCarrier(payload: any) {
        return this.http.post(
            `${this.API_URL}`, payload)
        .pipe(
            map((res: any) => res)
        );
    }
}
