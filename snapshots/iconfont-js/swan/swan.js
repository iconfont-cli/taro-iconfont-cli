Component({
  properties: {
    // alipay | user | setup
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
    },
    size: {
      type: Number,
      value: 14,
      observer: function(size) {
        this.setData({
          svgSize: true ? size / 750 * swan.getSystemInfoSync().windowWidth : size,
        });
      },
    },
  },
  data: {
    quot: '"',
    svgSize: true ? 14 / 750 * swan.getSystemInfoSync().windowWidth : 14,
  },
});
