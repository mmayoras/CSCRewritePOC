/* eslint-disable import/prefer-default-export */
import {
  ADD_METHOD,
  REMOVE_METHOD,
} from './actionTypes';

const defaultState = []; // empty array of methods

// export function pushNewLocation(location) {
//   browserHistory.push(location);
// }

export function findID(array, id) {
  // Parse through the array
  for (let index = 0; index < array.length; index += 1) {
    // Look for items who's id matched the passed in id of item to be removed
    if (array[index].id === id) {
      return index; // We have found the element, so stop searching
    }
  }

  // If no matching ID was found, return null
  return null;
}

// Remove a method item from the array if it exists
export function removeMethod(array, id) {
  // Used to keep track of the index of the item to be removed in the array
  const matchIndexLocation = findID(array, id);

  // If no match was found, return the array unedited.
  if (matchIndexLocation === null) {
    return array;
  }

  // Get all the array items BEFORE the item to be removed
  const array1 = array.slice(0, matchIndexLocation);

  // Get all the array items AFTER the item to be removed
  const array2 = array.slice(matchIndexLocation + 1, array.length);

  // Combine and return them
  return [
    ...array1, // ellipsis is necessary in order to get just the array's contents, rather than the array itself
    ...array2,
  ];
}

// Add a method item to the array if it does not already exist
export function addMethod(array, item, isDefault) {
  // If item already exists in the array, remove it prior to adding it again.
  const sanitizedArray = removeMethod(array, item.id);

  // If this item should be default (first in the array)
  if (isDefault === true) {
    return [
      item, // this default item first in the new array
      ...sanitizedArray, // ellipsis is necessary in order to get just the array's contents, rather than the array itself
    ];
  }

  return [
    ...sanitizedArray, // ellipsis is necessary in order to get just the array's contents, rather than the array itself
    item, // This item added to the end array
  ];
}

export const methodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_METHOD:
      return addMethod(state, action.item, action.isDefault);
    case REMOVE_METHOD:
      return removeMethod(state, action.id);
    default:
      return state;
  }
};
