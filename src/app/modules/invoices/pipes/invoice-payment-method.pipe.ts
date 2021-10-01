import { Pipe, PipeTransform } from '@angular/core';
import { InvoicePaymentMethod } from 'src/app/modules/invoices/types/invoice.model';

@Pipe({
  name: 'invoicePaymentMethod'
})
export class InvoicePaymentMethodPipe implements PipeTransform {
  transform(value: InvoicePaymentMethod): string {
    switch (value) {
      case InvoicePaymentMethod.DebitCard: return 'Дебетовая карта';
      case InvoicePaymentMethod.CreditCard: return 'Кредитная карта';
      case InvoicePaymentMethod.ECheck: return 'Электронный чек';
      default: return 'Неизвестный метод оплаты';
    }
  }
}
