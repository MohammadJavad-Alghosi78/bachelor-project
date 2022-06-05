/**
 *
 * @param {number} start - start number of array
 * @param {number} step - step of iterating
 * @param {number} end - end number of array
 * @returns {Array} final array for using in formulas
 *
 */
const arrayRange = (start = 0, step = 1, end) => {
  const sigmaElement = [];
  for (let index = start; index <= end; index += step) {
    sigmaElement.push(index);
  }
  return sigmaElement;
};

export default arrayRange;
