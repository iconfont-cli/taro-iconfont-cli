/**
 *
 * @param {string | string[]} color
 * @param {number} arrayIndex
 * @param {string} defaultColor
 * @return {string}
 */
var getColor = function(color, arrayIndex, defaultColor) {
  if (!color) {
    return defaultColor;
  }

  if (typeof color === 'string') {
    return color;
  }

  return color[arrayIndex] || defaultColor;
};

export default {
  getColor,
};
