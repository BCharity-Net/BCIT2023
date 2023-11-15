import { development, LensConfig } from '@lens-protocol/react-web'
import { bindings as wagmiBindings } from '@lens-protocol/wagmi'

export const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development // TODO: Change to production when launching live app
}
