/**
 * declaration methods
 *
 * @exports KnownMethods
 */
import CommonMethods from '../startup/server/methods/Common/declaration';
import DemoCollMethods from '../startup/server/methods/DemoColl/declaration';

export default interface KnownMethods extends CommonMethods, DemoCollMethods {}
