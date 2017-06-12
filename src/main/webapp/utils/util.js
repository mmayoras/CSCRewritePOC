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

export function validateYearAndMonth(keyedExpirationDate) {
  // if not 4 digits, return false
  if (!/^\d{4}$/.test(keyedExpirationDate)) {
    return false;
  }

  const expiry = String(keyedExpirationDate);
  const formattedMonth = parseInt(expiry.substring(0, 2), 10);
  const formattedYear = parseInt(expiry.substring(2, 4), 10);

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear() - 2000;

  // checking for past years and checking for not a number for year.
  if (formattedYear < currentYear) {
    return false;
  }

  // checking for valid range of months.
  if (formattedMonth > 12 || formattedMonth <= 0) {
    return false;
  }
  // when the input year matches the current year, then validate past month.

  if (formattedYear === currentYear && formattedMonth
      < currentMonth) {
    return false;
  }
  return true;
}

export function switchMonthYear(inputExpiry) {
  // Cut off DD if expiry is of the format YYMMDD
  const expiry = String(inputExpiry).substring(0, 4);

  // Convert YYMM to MMYY
  return String(expiry).substring(2) + String(expiry).substring(0, 2);
}
