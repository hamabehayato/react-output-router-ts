/**
 * navigation
 *
 * @package constants
 */

type NavigationsType = {
  TOP: string;
  CREATE: string;
  DETAIL: string;
  EDIT: string;
};

/**
 * router URL
 */
export const ROUTE_PATH: string = '/react-output-router-ts';

/**
 * router 定義に使用
 * @type {{TOP: string, CREATE: string, DETAIL: string, EDIT: string}}
 */
export const NAVIGATION_LIST: NavigationsType = {
  TOP: `${ROUTE_PATH}/`,
  CREATE: `${ROUTE_PATH}/create`,
  DETAIL: `${ROUTE_PATH}/detail/:id`,
  EDIT: `${ROUTE_PATH}/edit/:id`,
};

/**
 * 遷移先定義に使用
 * @type {{TOP: string, CREATE: string, DETAIL: string, EDIT: string}}
 */
export const NAVIGATION_PATH: NavigationsType = {
  TOP: `${ROUTE_PATH}/`,
  CREATE: `${ROUTE_PATH}/create`,
  DETAIL: `${ROUTE_PATH}/detail/`,
  EDIT: `${ROUTE_PATH}/edit/`,
};
