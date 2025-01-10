const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  INR: 74.5,
}

export function convertCurrency(amount: number, from: string, to: string): number {
  if (from === to) return amount
  const fromRate = exchangeRates[from as keyof typeof exchangeRates]
  const toRate = exchangeRates[to as keyof typeof exchangeRates]
  return (amount / fromRate) * toRate
}

