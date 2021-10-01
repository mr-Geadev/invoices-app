import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceBase, InvoicePaymentMethod } from 'src/app/modules/invoices/types/invoice.model';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceFormComponent {
  @Output() onSaveInvoice = new EventEmitter<InvoiceBase>();

  isDisabledValidation: boolean = true;

  readonly InvoicePaymentMethodsList =
    Object
      .values(InvoicePaymentMethod)
      .filter(val => typeof val === 'number')
      .map(val => Number(val));

  readonly newInvoice = new FormGroup({
    number: new FormControl(''),
    amount: new FormControl('', ),
    paymentMethod: new FormControl(InvoicePaymentMethod.DebitCard)
  })

  constructor(private cdr: ChangeDetectorRef) {}

  activateValidation() {
    this.newInvoice.get('number')?.setValidators([ Validators.required ]);
    this.newInvoice.get('number')?.updateValueAndValidity();
    this.newInvoice.get('amount')?.setValidators([ Validators.required, Validators.pattern(/^\d+$/) ]);
    this.newInvoice.get('amount')?.updateValueAndValidity();
    this.isDisabledValidation = false;
    this.cdr.markForCheck();
  }

  saveInvoice() {
    if (this.isDisabledValidation) {
      this.activateValidation()
    }

    if (this.newInvoice.valid) {
      this.onSaveInvoice.emit({
        ...this.newInvoice.value,
        amount: parseInt(this.newInvoice.value.amount)
      })
    }
  }
}
