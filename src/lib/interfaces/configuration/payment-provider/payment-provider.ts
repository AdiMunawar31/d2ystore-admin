export interface PaymentProviderInterface {
  id: string
  name: string
  code: string
  journal: {
    id: string
    name: string
  }
  admin_fee: string
  admin_fee_computation: string
  interbank_fee: string
}

export interface FormAddPaymentProviderInterface {
  id: string
  name: string
  code: string
  journal: {
    id: string
    name: string
  }
  admin_fee: string
  admin_fee_computation: string
  interbank_fee: string
}
