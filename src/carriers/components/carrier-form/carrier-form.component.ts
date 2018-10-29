import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-carrier-form',
    templateUrl: './carrier-form.component.html',
    styleUrls: ['./carrier-form.component.scss']
})

export class CarrierFormComponent implements OnChanges {
    @Input()
    carrier: any;

    @Output()
    update = new EventEmitter<any>();

    @Output()
    hideForm = new EventEmitter();

    carrierName: string;

    form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        is_public: [true],
        logo_url: ['']
    });

    ngOnChanges(changes: SimpleChanges) {
        const value = { ...this.carrier };
        this.carrierName = this.carrier.name;
        this.form.patchValue(value);
    }

    constructor(
        private fb: FormBuilder
    ) {}

    updateCarrier() {
        const payload = this.form.value;
        payload.app_id = this.carrier.app_id;
        this.update.emit({
            payload,
            id: this.carrier.id,
        });
    }

    cancel() {
        this.hideForm.emit();
    }
}
