import { NgModule } from '@angular/core';
import { InvoicesRoutingModule } from 'src/app/modules/invoices/invoices-routing.module';
import { InvoicesComponent } from 'src/app/modules/invoices/invoices.component';
import { InvoicesApiService } from 'src/app/modules/invoices/services/invoices-api.service';

@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    InvoicesRoutingModule,
  ],
  providers: [
    InvoicesApiService
  ],
  bootstrap: [InvoicesComponent]
})
export class InvoicesModule {}
