import { NgModule } from '@angular/core';
import { InvoicesRoutingModule } from 'src/app/modules/invoices/invoices-routing.module';
import { InvoicesComponent } from 'src/app/modules/invoices/invoices.component';

@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    InvoicesRoutingModule,
  ],
  providers: [],
  bootstrap: [InvoicesComponent]
})
export class InvoicesModule {}
