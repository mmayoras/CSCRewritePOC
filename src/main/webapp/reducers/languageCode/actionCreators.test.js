import {
  UPDATE_LANGUAGE_CODE_EN_CA,
  UPDATE_LANGUAGE_CODE_FR_CA,
  UPDATE_LANGUAGE_CODE_EN_US,
} from './actionTypes';
import {
  updateLanguageCodeEnCa,
  updateLanguageCodeFrCa,
  updateLanguageCodeEnUs,
} from './actionCreators';

test('language code can be updated to en_CA', () => {
  const actual = updateLanguageCodeEnCa();
  expect(actual).toEqual({
    type: UPDATE_LANGUAGE_CODE_EN_CA,
  });
});

test('language code can be updated to fr_CA', () => {
  const actual = updateLanguageCodeFrCa();
  expect(actual).toEqual({
    type: UPDATE_LANGUAGE_CODE_FR_CA,
  });
});

test('language code can be updated to en_US', () => {
  const actual = updateLanguageCodeEnUs();
  expect(actual).toEqual({
    type: UPDATE_LANGUAGE_CODE_EN_US,
  });
});
