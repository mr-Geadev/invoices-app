import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { InvoicesTableComponent } from 'src/app/modules/invoices/components/invoices-table/invoices-table.component';
import { InvoicesRoutingModule } from 'src/app/modules/invoices/invoices-routing.module';
import { CreateInvoicePage } from 'src/app/modules/invoices/pages/create-invoice/create-invoice.page';
import { InvoicesListPage } from 'src/app/modules/invoices/pages/invoices-list/invoices-list.page';
import { InvoicePaymentMethodPipe } from 'src/app/modules/invoices/pipes/invoice-payment-method.pipe';
import { InvoiceStatusPipe } from 'src/app/modules/invoices/pipes/invoice-status.pipe';
import { InvoicesApiService } from 'src/app/modules/invoices/services/invoices-api.service';
import { InvoicesService } from './services/invoices.service';

@NgModule({
  declarations: [
    // components
    InvoicesTableComponent,

    // pages
    InvoicesListPage,
    CreateInvoicePage,

    // pipes
    InvoiceStatusPipe,
    InvoicePaymentMethodPipe
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [
    InvoicesApiService,
    InvoicesService,
  ],
})
export class InvoicesModule {}
