/**
 * Generate random integer from min to max
 * including min, excluding max.
 * Both min and max should be integer
 * @param {number} num
 * @return {number}
 */

const randomGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default randomGen;
