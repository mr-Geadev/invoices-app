import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from 'src/app/modules/invoices/invoices.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
