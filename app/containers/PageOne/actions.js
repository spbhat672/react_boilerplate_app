/*
 *
 * PageOne actions
 *
 */

import { DEFAULT_ACTION, LOAD_EMPLOYEE_DATA, LOAD_EMP_DATA_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} empData The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function employeeDataFetched(employeeData) {
  return {
    type: LOAD_EMPLOYEE_DATA,
    empData: employeeData,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function empDataLoadingError(error) {
  return {
    type: LOAD_EMP_DATA_ERROR,
    error,
  };
}