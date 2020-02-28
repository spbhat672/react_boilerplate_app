import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageTwo state domain
 */

const selectPageTwoDomain = state => state.pageTwo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageTwo
 */

const makeSelectPageTwo = () =>
  createSelector(
    selectPageTwoDomain,
    substate => substate,
  );

export default makeSelectPageTwo;
export { selectPageTwoDomain };
