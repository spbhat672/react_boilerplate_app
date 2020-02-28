/**
 * Api calls....
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { employeeDataFetched } from './actions';

// Individual exports for testing
export default function* pageOneSaga() {
  // See example in containers/HomePage/saga.js
}

export function* getEmployeeData() {
  // const pageNumber = yield select(setEmployeePageNumber());
  // const pageNo = pageNumber || 5;
  const empApiLink = `https://reqres.in/api/users?page=5`;

  try {
    // Call our request helper (see 'utils/request')
    const empData = yield call(request, empApiLink);
    // eslint-disable-next-line no-undef
    yield put(employeeDataFetched(empData));
  } catch (err) {
    // eslint-disable-next-line no-undef
    yield put(empDataLoadingError(err));
  }
}