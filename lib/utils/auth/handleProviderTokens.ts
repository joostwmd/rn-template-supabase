import { DeviceStorage } from "../DeviceStorage"

export const PROVIDER_TOKEN_SELECOTR = "provider_token"
export const PROVIDER_REFRESH_TOKEN_SELECTOR = "provider_refresh_token"

export async function storeProviderToken(providerToken: string) {
  await DeviceStorage.setItem(PROVIDER_TOKEN_SELECOTR, providerToken)
}

export async function getProviderToken() {
  const token = await DeviceStorage.getItem(PROVIDER_TOKEN_SELECOTR)
  return token
}

export async function removeProviderToken() {
  await DeviceStorage.removeItem(PROVIDER_TOKEN_SELECOTR)
}

export async function storeProviderRefreshToken(providerRefreshToken: string) {
  await DeviceStorage.setItem(
    PROVIDER_REFRESH_TOKEN_SELECTOR,
    providerRefreshToken
  )
}

export async function getProviderRefreshToken() {
  const token = await DeviceStorage.getItem(PROVIDER_REFRESH_TOKEN_SELECTOR)
  return token
}

export async function removeProviderRefreshToken() {
  await DeviceStorage.removeItem(PROVIDER_REFRESH_TOKEN_SELECTOR)
}

export async function rotateProviderTokens() {
  //api call to refresh tokens, then store them
}
