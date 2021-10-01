import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoicesService } from 'src/app/modules/invoices/services/invoices.service';
import { InvoiceBase } from 'src/app/modules/invoices/types/invoice.model';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice.page.html',
  styleUrls: ['./create-invoice.page.scss']
})
export class CreateInvoicePage {

  sub = new Subscription();

  constructor(
    private invoicesService: InvoicesService,
    private router: Router,
  ) {}

  createInvoice(invoice: InvoiceBase) {
    this.sub = this.invoicesService.createInvoice(invoice).subscribe(() => {
      this.router.navigate(['../list']);
      this.sub.unsubscribe();
    });
  }
}
