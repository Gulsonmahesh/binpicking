import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors,  } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
@Directive({
  selector: '[appMustmatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustmatchDirective, multi: true }]
})
export class MustmatchDirective {
  @Input('mustMatch') mustMatch: string[] = [];

    // validate(formGroup: FormGroup): ValidationErrors {
    //   return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    // }
  constructor() { }

}
