/**
 *
 * Asynchronously loads the component for PageTwo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
