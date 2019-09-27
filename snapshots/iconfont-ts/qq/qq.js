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
      value: 20,
      observer: function(size) {
        this.setData({
          svgSize: false ? size / 750 * qq.getSystemInfoSync().windowWidth : size,
        });
      },
    },
  },
  data: {
    svgSize: false ? 20 / 750 * qq.getSystemInfoSync().windowWidth : 20,
    quot: '"',
    colorIsString: false,
  },
});
