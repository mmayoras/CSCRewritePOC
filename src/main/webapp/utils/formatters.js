/* eslint-disable prefer-template */
export function englishCurrencyFilter(amount = 0) {
  return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function frenchCanadaCurrencyFilter(amount = 0) {
  return '$' + amount.toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace(/[.]/g, ',');
}

export function pinPadEnglishCurrencyFilter(amount = 0) {
  return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function pinPadFrenchCanadaCurrencyFilter(amount = 0) {
  return '$' + amount.toFixed(2).replace(/[.]/g, ',');
}
