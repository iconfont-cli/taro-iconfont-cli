Component({
  props: {
    // alipay | user | setup
    name: null,
    // string | string[]
    color: '',
    size: 20,
  },
  data: {
    quot: '"',
    svgSize: 20,
  },
  didMount() {
    const size = this.props.size;

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: false ? size / 750 * my.getSystemInfoSync().windowWidth : size
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;

    if (size !== prevProps.size) {
      this.setData({
        svgSize: false ? size / 750 * my.getSystemInfoSync().windowWidth : size,
      });
    }
  },
});
