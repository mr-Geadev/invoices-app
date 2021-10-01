import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoicePage } from 'src/app/modules/invoices/pages/create-invoice/create-invoice.page';
import { ListInvoicesPage } from 'src/app/modules/invoices/pages/list-invoices/list-invoices.page';

const routes: Routes = [
  {
    path: 'list',
    component: ListInvoicesPage,
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
