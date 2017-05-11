/* eslint-disable new-cap,max-len */

import {
  SET_LOCALE_EN_US,
  SET_LOCALE_EN_CA,
  SET_LOCALE_FR_CA,
} from './actionTypes';

const enUS = {
  general: {
    optional: '(Optional)',
    requiredFields: '* = Required',
    // for multi-line alert messages add the \n character in your string
    payment: {
      approved: 'Accepted',
      declined: 'Declined',
      declined_invalid_avs: 'Declined - Zip does not match credit card billing record',
      declined_invalid_ccv2: 'Declined - Invalid Security Code',
      declined_invalid_avs_ccv2: 'Declined - Invalid Security Code \nDeclined - Zip does not match credit card billing record',
      declined_refferal: 'Unable to process the payment. Please ask the ' +
      'customer to call the customer service number on the back of ' +
      'their card.',
      declined_terms: 'Customer declined Terms and Conditions.',
    },
    alerts: {
      customerInsertCardNumber: 'Please inform customer to enter their ' +
      'credit card number on the Pin Pad',
      invalidCardLength: 'Invalid credit card length, inform customer to try again',
      invalidCard: 'Invalid card, inform customer to try new card',
      waitingCustomerExpirationDate: 'Waiting for customer to enter ' +
      'expiration date on the Pin Pad',
      waitingCustomerSecurityCode: 'Waiting for customer to enter security ' +
      'code on the Pin Pad',
      waitingCustomerPostalCode: 'Waiting for customer to enter postal ' +
      'code on the Pin Pad',
      informCustomerExpirationDate: 'Inform customer to enter their ' +
      'expiration date on the Pin Pad',
      informCustomerSecurityCode: 'Inform customer to enter their card ' +
      'security code on the Pin Pad',
      invalidExpirationDate: 'Invalid expiration date, inform customer to try again',
      invalidSecurityCode: 'Invalid security code, inform customer to try again',
      enterRequiredFields: 'Please fill out required fields, then submit',
      errorReadingCardInform: 'Error reading card. Inform customer to swipe again',
      informCustomerEnterCCManually: 'Inform customer to enter credit card manually on the PIN pad',
      chipCardRemovedEarly: 'Chip card removed early, inform customer to try again',
      errorReadingChipCard: 'Error reading chip card. Inform customer to remove and reinsert',
      chipCardNotSupported: 'Chip card not supported. Inform customer to remove card',
      pinTryLimitExceeded: 'PIN try limit exceeded. Inform customer to remove card',
      waitingCustomerPINEntry: 'Waiting for customer PIN Entry',
      approvedCustomerRemoveChip: 'Approved: Inform customer to remove chip card',
      declinedCustomerRemoveChip: 'Declined: Inform customer to remove chip card',
      pleaseSwipeChipCard: 'Please swipe chip card',
      processingChipCard: 'Processing Chip Card, please wait...',
      chipCardRequiresInsert: 'Chip card cannot be swiped, it must be inserted',
      cardExpiredInformCustomer: 'Card is expired, inform customer to try another tender',
      customerPressedCancel: 'Customer pressed Cancel',
      rejectBankCards: 'PYM100: Sorry, currently we do not accept this card type. Please provide an alternate form of payment.',
    },
  },
  tooltips: {
    name: 'Letters, numbers, and accented characters are accepted. Spaces and other special characters are not allowed at the beginning.',
    address: 'Letters, digits, and spaces are accepted.  # signs need a space before them to be valid.',
    city: 'Letters, numbers, and accented characters are accepted. Spaces and other special characters are not allowed at the beginning.',
  },
  index: {
    paymentAndBilling: 'Payment & Billing',
    paymentOnly: 'Payment',
    creditCard: 'Credit Card',
    creditDebitCard: 'Credit/Debit Card',
    billingAddress: 'Billing Address',
    emailAddress: 'Email Address',
  },
  creditCardForm: {
    creditCardNumber: 'Credit Card Number*',
    cvv: 'Security Code',
    poNumber: 'PO Number',
    firstName: 'First Name*',
    middleName: 'Middle Name',
    lastName: 'Last Name*',
    buyerId: 'Buyer ID*',
    expirationDate: 'Expiration (MM/YY)*',
  },
  billingAddress: {
    addressLine1: 'Address Line 1*',
    addressLine1Subtext: '',
    addressLine2: 'Address Line 2',
    city: 'City*',
    state: 'State / Province / Region*',
    zip: 'Postal Code / Zip*',
    phone: 'Primary Phone Number*',
  },
  emailAddressForm: {
    emailAddress: 'Email Address',
  },
  pinpad: {
    balanceDue: 'BALANCE DUE',
    approved: 'Approved',
    declined: 'Declined',
    invalidCard: 'Invalid card',
    insertCard: 'Please Insert Card',
    swipeCard: 'Please Swipe Card',
  },
  summaryForm: {
    total: 'Total',
    subtotal: 'Subtotal',
    estimatedTax: 'Estimated Tax',
    orderSummaryHeader: 'Order Summary',
    giftCard: 'Gift Card',
  },
  submitForm: {
    submit: 'Submit',
    sending: 'Sending...',
    declineTerms: 'Customer Declined Terms',
  },
  errorText: {
    requiredField: 'Invalid',
  },
};

const enCA = {
  general: {
    optional: '(Optional)',
    requiredFields: '* = Required',
    // for multi-line alert messages add the \n character in your string
    payment: {
      approved: 'Accepted',
      declined: 'Declined',
      declined_invalid_avs: 'Declined - Zip does not match credit card billing record',
      declined_invalid_ccv2: 'Declined - Invalid Security Code',
      declined_invalid_avs_ccv2: 'Declined - Invalid Security Code \nDeclined - Zip does not match credit card billing record',
      declined_refferal: 'Unable to process the payment. Please ask the ' +
      'customer to call the customer service number on the back of ' +
      'their card.',
      declined_terms: 'Customer declined Terms and Conditions.',
    },
    alerts: {
      customerInsertCardNumber: 'Please inform customer to enter their ' +
      'credit card number on the Pin Pad',
      invalidCardLength: 'Invalid credit card length, inform customer to try again',
      invalidCard: 'Invalid card, inform customer to try new card',
      waitingCustomerExpirationDate: 'Waiting for customer to enter ' +
      'expiration date on the Pin Pad',
      waitingCustomerSecurityCode: 'Waiting for customer to enter security ' +
      'code on the Pin Pad',
      waitingCustomerPostalCode: 'Waiting for customer to enter postal ' +
      'code on the Pin Pad',
      informCustomerExpirationDate: 'Inform customer to enter their ' +
      'expiration date on the Pin Pad',
      informCustomerSecurityCode: 'Inform customer to enter their card ' +
      'security code on the Pin Pad',
      invalidExpirationDate: 'Invalid expiration date, inform customer to try again',
      invalidSecurityCode: 'Invalid security code, inform customer to try again',
      enterRequiredFields: 'Please fill out required fields, then submit',
      errorReadingCardInform: 'Error reading card. Inform customer to swipe again',
      informCustomerEnterCCManually: 'Inform customer to enter credit card manually on the PIN pad',
      chipCardRemovedEarly: 'Chip card removed early, inform customer to try again',
      errorReadingChipCard: 'Error reading chip card. Inform customer to remove and reinsert',
      chipCardNotSupported: 'Chip card not supported. Inform customer to remove card',
      pinTryLimitExceeded: 'PIN try limit exceeded. Inform customer to remove card',
      waitingCustomerPINEntry: 'Waiting for customer PIN Entry',
      approvedCustomerRemoveChip: 'Approved: Inform customer to remove chip card',
      declinedCustomerRemoveChip: 'Declined: Inform customer to remove chip card',
      pleaseSwipeChipCard: 'Please swipe chip card',
      processingChipCard: 'Processing Chip Card, please wait...',
      chipCardRequiresInsert: 'Chip card cannot be swiped, it must be inserted',
      cardExpiredInformCustomer: 'Card is expired, inform customer to try another tender',
      customerPressedCancel: 'Customer pressed Cancel',
      rejectBankCards: 'PYM100: Sorry, currently we do not accept this card type. Please provide an alternate form of payment.',
    },
  },
  tooltips: {
    name: 'Letters, numbers, and accented characters are accepted. Spaces and other special characters are not allowed at the beginning.',
    address: 'Letters, digits, and spaces are accepted.  # signs need a space before them to be valid.',
    email: '',
    city: 'Letters, numbers, and accented characters are accepted. Spaces and other special characters are not allowed at the beginning.',
  },
  index: {
    paymentAndBilling: 'Payment & Billing',
    paymentOnly: 'Payment',
    creditCard: 'Credit Card',
    creditDebitCard: 'Credit/Debit Card',
    billingAddress: 'Billing Address',
    emailAddress: 'Email Address',
  },
  creditCardForm: {
    creditCardNumber: 'Credit Card Number*',
    cvv: 'Security Code',
    poNumber: 'PO Number',
    firstName: 'First Name*',
    middleName: 'Middle Name',
    lastName: 'Last Name*',
    buyerId: 'Buyer ID*',
    expirationDate: 'Expiration (MM/YY)*',
  },
  billingAddress: {
    addressLine1: 'Address Line 1*',
    addressLine1Subtext: '',
    addressLine2: 'Address Line 2',
    city: 'City*',
    state: 'State / Province / Region*',
    zip: 'Postal Code*',
    phone: 'Primary Phone Number*',
  },
  emailAddressForm: {
    emailAddress: 'Email Address',
  },
  pinpad: {
    balanceDue: 'BALANCE DUE',
    approved: 'Approved',
    declined: 'Declined',
    invalidCard: 'Invalid card',
    insertCard: 'Please Insert Card',
    swipeCard: 'Please Swipe Card',
  },
  summaryForm: {
    total: 'Total',
    subtotal: 'Subtotal',
    estimatedTax: 'Estimated Tax',
    orderSummaryHeader: 'Order Summary',
    giftCard: 'Gift Card',
  },
  submitForm: {
    submit: 'Submit',
    sending: 'Sending...',
    declineTerms: 'Customer Declined Terms',
  },
  errorText: {
    requiredField: 'Invalid',
  },
};

const frCA = {
  general: {
    optional: '(facultatif)',
    requiredFields: '* = Obligators',
    payment: {
      approved: 'Accepté',
      declined: 'Diminué',
      declined_invalid_avs: 'Diminué',
      declined_invalid_ccv2: 'Diminué',
      declined_invalid_avs_ccv2: 'Diminué',
      declined_refferal: 'Impossible de traiter le paiement . S\'il vous ' +
      'plaît demander au client d\' appeler le numéro de service à la ' +
      'clientèle sur le dos de leur carte.',
      declined_terms: 'Le client a refusé les modalités',
    },
    alerts: {
      customerInsertCardNumber: 'Demandez au client d\'entrer le numéro de la ' +
      'carte de crédit manuellement sur le clavier NIP',
      invalidCardLength: 'Longueur non valide du numéro de carte de crédit; ' +
      'demandez au client de réessayer',
      invalidCard: 'Carte non valide; demandez au client d’essayer une nouvelle carte',
      waitingCustomerExpirationDate: 'En attente de l’entrée de la date ' +
      'd’expiration sur le clavier NIP par le client',
      waitingCustomerSecurityCode: 'En attente de l’entrée du code de ' +
      'sécurité sur le clavier NIP par le client',
      waitingCustomerPostalCode: 'En attente de l’entrée du code postal sur ' +
      'le clavier NIP par le client',
      informCustomerExpirationDate: 'Demandez au client d’entrer la date ' +
      'd’expiration sur le clavier NIP',
      informCustomerSecurityCode: 'Demandez au client d’entrer le code de ' +
      'sécurité de sa carte sur le clavier NIP',
      invalidExpirationDate: 'Date d’expiration non valide; demandez au ' +
      'client de réessayer',
      invalidSecurityCode: 'Code de sécurité non valide; demandez au client ' +
      'de réessayer',
      enterRequiredFields: 'Veuillez remplir les champs requis, puis cliquer ' +
      'sur Soumettre',
      errorReadingCardInform: 'Erreur de lecture de la carte. Demandez au client de la glisser ' +
      'de nouveau',
      informCustomerEnterCCManually: 'Demandez au client d’entrer le numéro de la carte de ' +
      'crédit manuellement sur le clavier NIP',
      chipCardRemovedEarly: 'La carte à puce a été retirée trop tôt, demandez au client de ' +
      'réessayer',
      errorReadingChipCard: 'Erreur de lecture de la carte à puce. Demandez au client de la ' +
      'retirer et de la réinsérer',
      chipCardNotSupported: 'La carte à puce n’est pas prise en charge. Demandez au client de la ' +
      'retirer',
      pinTryLimitExceeded: 'Le nombre d’essais d’entrée du NIP est dépassé. Demandez au client ' +
      'de retirer la carte',
      waitingCustomerPINEntry: 'En attente de l’entrée du NIP par le client',
      approvedCustomerRemoveChip: 'Approuvée: Demandez au client de retirer la carte à puce',
      declinedCustomerRemoveChip: 'Refusée: Demandez au client de retirer la carte à puce',
      pleaseSwipeChipCard: 'Veuillez glisser la carte à puce',
      processingChipCard: 'Traitement de la carte à puce, veuillez patienter...',
      chipCardRequiresInsert: 'La carte à puce ne peut être glissée, elle doit être insérée',
      cardExpiredInformCustomer: 'La carte est expirée, demandez au client d’essayer un autre ' +
      'mode de paiement',
      customerPressedCancel: 'Le client a appuyé sur Annuler',
      rejectBankCards: 'PYM100: Nous sommes désolés, nous n’acceptons plus ce type de carte. Veuillez fournir un autre mode de paiement.',
    },
  },
  tooltips: {
    name: 'Lettres, chiffres et caractères accentués sont acceptés. Les espaces et autres caractères spéciaux ne sont pas autorisés au début.',
    address: 'Lettres, chiffres et espaces sont acceptés. # signes ont besoin d\'un espace avant qu\'ils soient valides.',
    email: '',
    city: 'Lettres, chiffres et caractères accentués sont acceptés. Les espaces et autres caractères spéciaux ne sont pas autorisés au début.',
  },
  index: {
    paymentAndBilling: 'Paiement et facturation',
    paymentOnly: 'Paiement',
    creditCard: 'Carte de crédit',
    creditDebitCard: 'Carte de crédit / débit',
    billingAddress: 'Adresse de facturation',
    emailAddress: 'Adresse e-mail',
  },
  creditCardForm: {
    creditCardNumber: 'Numéro de carte-cadeau*',
    cvv: 'Code de sécurité',
    poNumber: 'Numéro de BC',
    firstName: 'Prénom*',
    middleName: 'Second prénom',
    lastName: 'Nom*',
    buyerId: 'Numéro d’identification de l’acheteur*',
    expirationDate: 'Expiration (mm/aa)*',
  },
  billingAddress: {
    addressLine1: 'Ligne d’adresse 1*',
    addressLine1Subtext: 'Adresse physique',
    addressLine2: 'Ligne d’adresse 2',
    city: 'Ville*',
    state: 'État / Province / Région*',
    zip: 'Code postal*',
    phone: 'Téléphone primaire*',
  },
  emailAddressForm: {
    emailAddress: 'Adresse e-mail',
  },
  pinpad: {
    balanceDue: 'SOLDE À PAYER',
    approved: 'Approuvée',
    declined: 'Refusée',
    invalidCard: 'Carte non valide',
    insertCard: 'Veuillez insérer la carte',
    swipeCard: 'Veuillez glisser la carte',
  },
  summaryForm: {
    total: 'Le total',
    subtotal: 'Total',
    estimatedTax: 'Impôt estimée',
    orderSummaryHeader: 'Récapitulatif de la commande',
    giftCard: 'Carte cadeau',
  },
  submitForm: {
    submit: 'Soumettre',
    sending: 'Envoi...',
    declineTerms: 'Le client a refusé les modalités',

  },
  errorText: {
    requiredField: 'Invalide',
  },
};

export default function localesReducer(state = enUS, { type = '' }) {
  switch (type) {
    case SET_LOCALE_EN_US:
      return enUS;
    case SET_LOCALE_EN_CA:
      return enCA;
    case SET_LOCALE_FR_CA:
      return frCA;
    default:
      return state;
  }
}
