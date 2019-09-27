Component({
  properties: {
    // alipay | user | setup
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colorIsString: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 14,
      observer: function(size) {
        this.setData({
          svgSize: true ? size / 750 * qq.getSystemInfoSync().windowWidth : size,
        });
      },
    },
  },
  data: {
    svgSize: true ? 14 / 750 * qq.getSystemInfoSync().windowWidth : 14,
    quot: '"',
    colorIsString: false,
  },
});
