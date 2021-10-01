import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { InvoicesTableComponent } from 'src/app/modules/invoices/components/invoices-table/invoices-table.component';
import { InvoicesRoutingModule } from 'src/app/modules/invoices/invoices-routing.module';
import { InvoicesListPage } from 'src/app/modules/invoices/pages/invoices-list/invoices-list.page';
import { InvoicesApiService } from 'src/app/modules/invoices/services/invoices-api.service';
import { InvoicesService } from './services/invoices.service';

@NgModule({
  declarations: [
    // components
    InvoicesTableComponent,

    // pages
    InvoicesListPage,
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    InvoicesApiService,
    InvoicesService,
  ],
})
export class InvoicesModule {}
