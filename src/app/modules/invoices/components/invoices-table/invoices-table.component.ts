import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InvoicesService } from 'src/app/modules/invoices/services/invoices.service';
import { Invoice } from 'src/app/modules/invoices/types/invoice.model';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicesTableComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['creationDate', 'number', 'status', 'amount', 'paymentMethod'];
  dataSource!: MatTableDataSource<Invoice>;

  readonly sub = this.invoicesService.invoicesList$
    .subscribe((invoicesList) => {
      this.dataSource = new MatTableDataSource(invoicesList);
      this.cdr.markForCheck();
    })

  constructor(
    private invoicesService: InvoicesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }
}
