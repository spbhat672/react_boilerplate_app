/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const setEmployeePageNumber = () =>
  createSelector(
    selectHome,
    homeState => homeState.empPageNumber,
  );

export { selectHome, makeSelectUsername, setEmployeePageNumber };
