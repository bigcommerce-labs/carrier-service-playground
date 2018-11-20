import { Component, OnChanges, Inject, Input, Output, EventEmitter } from '@angular/core';
import { logoUrlMatcher } from '../carrier-form/logo-url.validator';
import { FormBuilder, Validators } from '@angular/forms';

import { COUNTRIES_DATA } from '../../../shared/countries-data.model';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnChanges {

  @Input()
  configuration;

  @Output()
  create = new EventEmitter<any>();

  constructor(
    @Inject(COUNTRIES_DATA) private countries,
    private fb: FormBuilder
  ) { }

  form = this.fb.group({
    zones_enabled: [true],
    check_connection_options_url: [],
    multi_carrier_support: [true],
    quote_url: ['https://desolate-dusk-94538.herokuapp.com/sample-carrier-service/rates', [Validators.required, logoUrlMatcher]],
    supported_country_values: ['', Validators.required],
    settings_schema: [`{"connection":{"fields":[]},"zone":{"fields":[]}}`, Validators.required]
});

  ngOnChanges() {
    if (this.configuration && this.configuration.id) {
      const value = { ...this.configuration };
      this.form.patchValue(value);
    }
  }

}
