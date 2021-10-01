import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { InvoiceFormComponent } from 'src/app/modules/invoices/components/invoice-form/invoice-form.component';
import { InvoicesTableComponent } from 'src/app/modules/invoices/components/invoices-table/invoices-table.component';
import { InvoicesRoutingModule } from 'src/app/modules/invoices/invoices-routing.module';
import { CreateInvoicePage } from 'src/app/modules/invoices/pages/create-invoice/create-invoice.page';
import { ListInvoicesPage } from 'src/app/modules/invoices/pages/list-invoices/list-invoices.page';
import { InvoicePaymentMethodPipe } from 'src/app/modules/invoices/pipes/invoice-payment-method.pipe';
import { InvoiceStatusPipe } from 'src/app/modules/invoices/pipes/invoice-status.pipe';
import { InvoicesApiService } from 'src/app/modules/invoices/services/invoices-api.service';
import { InvoicesService } from './services/invoices.service';

@NgModule({
  declarations: [
    // components
    InvoicesTableComponent,
    InvoiceFormComponent,

    // pages
    ListInvoicesPage,
    CreateInvoicePage,

    // pipes
    InvoiceStatusPipe,
    InvoicePaymentMethodPipe
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // angular material
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    InvoicesApiService,
    InvoicesService,
  ],
})
export class InvoicesModule {}
