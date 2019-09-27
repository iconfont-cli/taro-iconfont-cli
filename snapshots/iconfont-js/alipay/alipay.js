Component({
  props: {
    // alipay | user | setup
    name: null,
    // string | string[]
    color: '',
    size: 14,
  },
  data: {
    quot: '"',
    svgSize: 14,
  },
  didMount() {
    const size = this.props.size;

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: true ? size / 750 * my.getSystemInfoSync().windowWidth : size
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;

    if (size !== prevProps.size) {
      this.setData({
        svgSize: true ? size / 750 * my.getSystemInfoSync().windowWidth : size,
      });
    }
  },
});
