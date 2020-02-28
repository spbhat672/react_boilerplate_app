import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageOne state domain
 */

const selectPageOneDomain = state => state.pageOne || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageOne
 */

const makeSelectPageOne = () =>
  createSelector(
    selectPageOneDomain,
    substate => substate,
  );

export default makeSelectPageOne;
export { selectPageOneDomain };
