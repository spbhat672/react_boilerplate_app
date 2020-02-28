import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageThree state domain
 */

const selectPageThreeDomain = state => state.pageThree || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageThree
 */

const makeSelectPageThree = () =>
  createSelector(
    selectPageThreeDomain,
    substate => substate,
  );

export default makeSelectPageThree;
export { selectPageThreeDomain };
