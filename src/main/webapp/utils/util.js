/* eslint-disable no-console */
import uuid from 'uuid';

export function isDebitOnlyCard(crHostId, paymtMethCode) {
  console.log('Determining if card is debit based off of crHostId:', crHostId,
    ', paymtMethCode:', paymtMethCode);
  // Check dual-debit card to prompt for pin.
  // Determine if the card ((has a debit crHostId or no crHostId) and is NOT a Home Depot card)
  if ((crHostId.trim() === '') && (!/^(H).$/.test(paymtMethCode))) {
    console.log('Card is debit');
    return true;
  }
  console.log('Card is NOT debit');
  return false;
}

export function isDualCard(crHostId) {
  console.log('Determining if card is dual (debit and credit) based off crHostId');
  if (/^.(D)$/.test(crHostId)) {
    console.log('Card is dual');
    return true;
  }
  return false;
}

export function resolveHostUrl(env) {
  if (env === 'production') {
    // return 'https://ps-gateway.apps.homedepot.com';
    return 'https://thdapi.homedepot.com';
  }
  if (env === 'qa') {
    // return 'https://ps-gateway.apps-np.homedepot.com';
    return 'https://thdapiqae.homedepot.com/qa';
  }
  // return 'https://ps-gateway-dev.apps-np.homedepot.com';
  return 'https://thdapiqae.homedepot.com/dev';
}

export function constructJsonHeaders(state) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  // TODO Refactor the hmacCredentials to remove it
  headers.append('ps-client-id', state.hmacCredentials.clientId);
  // headers.append('ps-client-token', state.hmacCredentials.clientToken);
  // headers.append('ps-client-timestamp', String(state.hmacCredentials.clientTimestamp));
  headers.append('Authorization', `Bearer ${state.authenticationData.accessToken}`);
  headers.append('UUID', uuid.v4());
  return headers;
}

export function verifyAccessTokenScope(scopeValue) {
  return scopeValue.includes('orangePayServices');
}

export function validateYearAndMonth(keyedExpirationDate) {
  // if not 4 digits, return false
  if (!/^\d{4}$/.test(keyedExpirationDate)) return false;

  const expiry = String(keyedExpirationDate);
  const formattedMonth = parseInt(expiry.substring(0, 2), 10);
  const formattedYear = parseInt(expiry.substring(2, 4), 10);

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear() - 2000;

  // checking for past years and checking for not a number for year.
  if (formattedYear < currentYear) return false;

  // checking for valid range of months.
  if (formattedMonth > 12 || formattedMonth <= 0) return false;
  // when the input year matches the current year, then validate past month.

  if (formattedYear === currentYear && formattedMonth < currentMonth) return false;
  return true;
}

export function switchMonthYear(inputExpiry) {
  // Cut off DD if expiry is of the format YYMMDD
  const expiry = String(inputExpiry).substring(0, 4);

  // Convert YYMM to MMYY
  return String(expiry).substring(2) + String(expiry).substring(0, 2);
}
