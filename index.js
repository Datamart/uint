/**
 * @fileoverview Unsigned integer module from Glize library.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://github.com/Datamart/Glize
 * @module uint
 */

/**
 * Maximum value for unsigned 8-bit integer.
 * @type {number}
 */
export const MAX_UINT8 = 255; // Math.pow(2, 8) - 1;

/**
 * Maximum value for unsigned 16-bit integer.
 * @type {number}
 */
export const MAX_UINT16 = 65535; // Math.pow(2, 16) - 1;

/**
 * Maximum value for unsigned 32-bit integer.
 * @type {number}
 */
export const MAX_UINT32 = 4294967295; // Math.pow(2, 32) - 1;

/**
 * Converts given <code>number</code> to unsigned int8.
 * @param {number} number The number to be converted.
 * @return {number} The unsigned (zero or positive) number.
 * @method
 * @example
 * import {uint8} from 'uint';
 * uint8(0);    //> 0
 * uint8(1);    //> 1
 * uint8(255);  //> 255
 * uint8(-5);   //> NaN
 */
export const uint8 = (number) => uint_(number, MAX_UINT8);

/**
 * Converts given <code>number</code> to unsigned int16.
 * @param {number} number The number to be converted.
 * @return {number} The unsigned (zero or positive) number.
 * @method
 * @example
 * import {uint16} from 'uint';
 * uint16(0);     //> 0
 * uint16(1);     //> 1
 * uint16(65535); //> 65535
 * uint16(-5);    //> NaN
 */
export const uint16 = (number) => uint_(number, MAX_UINT16);

/**
 * Converts given <code>number</code> to unsigned int32.
 * @param {number} number The number to be converted.
 * @return {number} The unsigned (zero or positive) number.
 * @method
 * @example
 * import {uint32} from 'uint';
 * uint32(0);          //> 0
 * uint32(1);          //> 1
 * uint32(4294967295); //> 4294967295
 * uint32(-5);         //> NaN
 */
export const uint32 = (number) => uint_(number, MAX_UINT32);

/**
 * Converts given <code>number</code> to unsigned integer.
 * @param {number} number The number to be converted.
 * @param {number} max The max integer range.
 * @return {number} The unsigned (zero or positive) number.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#polyfill
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#polyfill
 * @private
 */
const uint_ = (number, max) => {
  if (!Number.isNaN(number) && 0 <= number && max >= number) {
    return number >>> 0;
  }
  return NaN;
};
