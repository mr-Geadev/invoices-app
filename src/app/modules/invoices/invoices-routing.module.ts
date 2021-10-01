import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoicePage } from 'src/app/modules/invoices/pages/create-invoice/create-invoice.page';
import { InvoicesListPage } from 'src/app/modules/invoices/pages/invoices-list/invoices-list.page';

const routes: Routes = [
  {
    path: 'list',
    component: InvoicesListPage,
  },
  {
    path: 'create',
    component: CreateInvoicePage,
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
