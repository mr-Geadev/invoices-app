import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { publishReplay, refCount, switchMapTo, tap } from 'rxjs/operators';
import { InvoicesApiService } from 'src/app/modules/invoices/services/invoices-api.service';
import { Invoice, InvoiceBase } from 'src/app/modules/invoices/types/invoice.model';

@Injectable()
export class InvoicesService {

  readonly invoicesListUpd = new BehaviorSubject<void>(undefined);
  readonly invoicesList$ = this.invoicesListUpd.asObservable().pipe(
    switchMapTo(this.invoicesApiService.getInvoicesList()),
    publishReplay(1),
    refCount()
  )

  constructor(
    private invoicesApiService: InvoicesApiService,
    private snackBar: MatSnackBar
  ) {}

  createInvoice(newInvoice: InvoiceBase): Observable<Invoice> {
    return this.invoicesApiService.createInvoice(newInvoice).pipe(
      tap(() => {
        this.snackBar.open('Счет создан', 'Закрыть', {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.invoicesListUpd.next()
      })
    )
  }
}
