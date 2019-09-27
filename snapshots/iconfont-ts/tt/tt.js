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
          svgSize: false ? size / 750 * tt.getSystemInfoSync().windowWidth : size,
        });
      },
    },
  },
  data: {
    svgSize: false ? 20 / 750 * tt.getSystemInfoSync().windowWidth : 20,
    quot: '"',
    colorIsString: false,
  },
});
