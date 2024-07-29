interface JournalProviderBranchInterface {
  id: string
  name: string
}

interface IncomingOutgoingInterface {
  id: string
  name: string
  code: string
}

interface PaymentProviderInterface {
  id: string
  name: string
}

interface PaymentProviderInterface {
  id: string
  name: string
}

export interface PaymentMethodInterface {
  id: string
  name: string
  show_on_sfa: true | false
  show_on_pos: true | false
  show_on_esuite: true | false
  active: true | false
  journal: JournalProviderBranchInterface
  payment_usage: string
  incoming_account: IncomingOutgoingInterface
  outgoing_account: IncomingOutgoingInterface
  provider: PaymentProviderInterface[]
  branch: JournalProviderBranchInterface[]
}

export interface DraftPaymentMethodInterface {
  id: string
  name: string
  show_on_sfa: true | false
  show_on_pos: true | false
  show_on_esuite: true | false
  active: true | false
  journal: JournalProviderBranchInterface
  payment_usage: string
  incoming_account: IncomingOutgoingInterface
  outgoing_account: IncomingOutgoingInterface
  provider: PaymentProviderInterface[]
  branch: JournalProviderBranchInterface[]
}

export interface PaymentMethodInfoInterface {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  show: any[]
  journal: string
  payment_usage: string
  incoming_account: string
  outgoing_account: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  branch: any[]
}
