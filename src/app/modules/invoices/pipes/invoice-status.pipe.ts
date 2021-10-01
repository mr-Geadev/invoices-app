import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceStatus } from 'src/app/modules/invoices/types/invoice.model';

@Pipe({
  name: 'invoiceStatus'
})
export class InvoiceStatusPipe implements PipeTransform {
  transform(value: InvoiceStatus): string {
    switch (value) {
      case InvoiceStatus.New: return 'Новый';
      case InvoiceStatus.Paid: return 'Оплачен';
      case InvoiceStatus.Canceled: return 'Отменён';
      default: return 'Неизвестный статус';
    }
  }
}
