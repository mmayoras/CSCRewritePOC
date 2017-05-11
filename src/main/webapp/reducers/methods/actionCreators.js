import {
  ADD_METHOD,
  REMOVE_METHOD,
} from './actionTypes';

let rootPath;
if (process.env.NODE_ENV === 'qa') {
  rootPath = 'qa/ps-orangepay/';
} else {
  rootPath = '';
}

/* item structure:
item: {
  id - This is the unique identifier of this particular method
  componentName - This is the name of the component when imported into Root.jsx
  title - This is the text that displays on the method selecter in the nav pane
  location - This is the router location of the method's component
  className - This is the css className to be associated with the method selecter's div in the nav pane
}
*/

export function enablePaymentMethodCard(isDefault) {
  return {
    type: ADD_METHOD,
    isDefault,
    item: {
      id: 'paymentMethodCard',
      title: 'Card',
      location: `${rootPath}card`,
      className: 'icon_credit_card',
    },
  };
}

export function enablePaymentMethodKeyboardManualEntry(isDefault) {
  return {
    type: ADD_METHOD,
    isDefault,
    item: {
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: `${rootPath}keyboard-manual-entry`,
      className: 'icon_touch_pad',
    },
  };
}

export function removeMethod(id) {
  return {
    type: REMOVE_METHOD,
    id,
  };
}
