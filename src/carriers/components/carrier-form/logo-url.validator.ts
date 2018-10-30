import { AbstractControl } from '@angular/forms';

export const logoUrlMatcher = (control: AbstractControl) => {
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const valid = regex.test(control.value);
    return valid ? null : {invalidUrl: true};
};
