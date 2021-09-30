import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Invoice,
  InvoiceBase,
  InvoicePaymentMethod,
  InvoiceStatus,
} from 'src/app/modules/invoices/types/invoice.model';

const INVOICES_LIST: Invoice[] = [
  {
    creationDate: new Date(),
    changeDate: new Date(),
    number: '369784623846827',
    status: InvoiceStatus.New,
    amount: 86234,
    paymentMethod: InvoicePaymentMethod.CreditCard
  },
  {
    creationDate: new Date(),
    changeDate: new Date(),
    number: '981475891274590',
    status: InvoiceStatus.Paid,
    amount: 12312,
    paymentMethod: InvoicePaymentMethod.DebitCard
  },
  {
    creationDate: new Date(),
    changeDate: new Date(),
    number: '389139402397',
    status: InvoiceStatus.Canceled,
    amount: 24392,
    paymentMethod: InvoicePaymentMethod.ECheck
  }
]

@Injectable()
export class InvoicesApiService {

  constructor() {}

  getInvoicesList(): Observable<Invoice[]> {
    return of(INVOICES_LIST);
  }

  createInvoice(newInvoice: InvoiceBase): Observable<Invoice> {
    const invoice: Invoice = {
      ...newInvoice,
      creationDate: new Date(),
      changeDate: new Date(),
      status: InvoiceStatus.New
    };
    INVOICES_LIST.push(invoice);
    return of(invoice);
  }
}
