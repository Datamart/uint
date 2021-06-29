// typescript

/**
 * Unsigned (zero or positive) number.
 */
type uInt8 = number;

/**
 * Unsigned (zero or positive) number.
 */
type uInt16 = number;

/**
 * Unsigned (zero or positive) number.
 */
type uInt32 = number;

/**
 * Maximum value for unsigned 8-bit integer.
 * @type {uInt8}
 */
declare var MAX_UINT8: uInt8;

/**
 * Maximum value for unsigned 16-bit integer.
 * @type {uInt16}
 */
declare var MAX_UINT16: uInt16;

/**
 * Maximum value for unsigned 32-bit integer.
 * @type {uInt32}
 */
declare var MAX_UINT32: uInt32;

/**
 * Converts given `number` to unsigned int8.
 * @param {number} number The number to be converted.
 * @return {uInt8} The unsigned (zero or positive) number.
 */
export declare function uint8(number: number): uInt8;

/**
 * Converts given `number` to unsigned int16.
 * @param {number} number The number to be converted.
 * @return {uInt16} The unsigned (zero or positive) number.
 */
export declare function uint16(number: number): uInt16;

/**
 * Converts given `number` to unsigned int32.
 * @param {number} number The number to be converted.
 * @return {uInt32} The unsigned (zero or positive) number.
 */
export declare function uint32(number: number): uInt32;
