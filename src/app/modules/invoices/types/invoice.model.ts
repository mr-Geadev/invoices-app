export enum InvoiceStatus {
  New = 1,
  Paid,
  Canceled
}

export enum InvoicePaymentMethod {
  CreditCard = 1,
  DebitCard,
  ECheck
}

export interface InvoiceBase {
  number: string; // i used string type because invoice number can be too long
  amount: number,
  paymentMethod: InvoicePaymentMethod
}

export interface Invoice extends InvoiceBase {
  creationDate: Date,
  changeDate: Date,
  status: InvoiceStatus,
}
