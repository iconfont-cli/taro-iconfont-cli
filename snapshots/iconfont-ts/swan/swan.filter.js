export default {
  /**
   *
   * @param {string | string[]} color
   * @param {number} arrayIndex
   * @param {string} defaultColor
   * @return {string}
   */
  getColor: function(color, arrayIndex, defaultColor) {
    if (!color) {
      return defaultColor;
    }

    if (typeof color === 'string') {
      return color;
    }

    return color[arrayIndex] || defaultColor;
  },
};
