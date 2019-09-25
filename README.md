# taro-iconfont-cli
在Taro框架中使用iconfont图标，不依赖字体，支持多色彩。

基于小程序版的[mini-program-iconfont-cli](https://github.com/fwh1990/mini-program-iconfont-cli)和RN版的[react-native-iconfont-cli](https://github.com/fwh1990/react-native-iconfont-cli)，你也可以在各自平台中单独使用它们。

# 支持平台

>- React-Native
>- 微信小程序
>- 支付宝小程序
>- 百度小程序

# 特性
1、一键生成标准组件，多端支持
<br>
2、使用方便，import即可
<br>
3、支持多色彩
<br>
4、支持自定义颜色
<br>
5/支持es6和typescript两种模式


# Step 1
安装插件
```bash
# Yarn
yarn add taro-iconfont-cli --dev

# Npm
npm install taro-iconfont-cli --save-dev
```


# Step 2
生成配置文件
```bash
npx iconfont-init
```
此时项目根目录会生成一个`iconfont.json`的文件，内容如下：
```json
{
  "symbol_url": "请参考README.md，复制 http://iconfont.cn 官网提供的JS链接",
  "save_dir": "./iconfont",
  "use_typescript": false,
  "platforms": "*",
  "use_rpx": false,
  "trim_icon_prefix": "icon",
  "default_icon_size": 18
}
```
### 配置参数说明：
### symbol_url
请直接复制[iconfont](http://iconfont.cn)官网提供的项目链接。请务必看清是`.js`后缀而不是.css后缀。如果你现在还没有创建iconfont的仓库，那么可以填入这个链接去测试：`http://at.alicdn.com/t/font_1373348_kk9y3jk2omq.js`

<br />

![](https://github.com/fwh1990/mini-program-iconfont-cli/blob/master/images/symbol-url.png?raw=true)

### save_dir
根据iconfont图标生成的组件存放的位置。每次生成组件之前，该文件夹都会被清空。

### use_typescript
如果您的项目使用Typescript编写，请设置为true。这个选项将决定生成的图标组件是`.tsx`还是`.js`后缀。

当该值为false时，我们会为您的图标生成`.js`和`.d.ts`两个文件，以便您能享受到最好的开发体验。

### platforms
选择需要支持的平台，默认是`*`，意味着所有平台都需要支持（如果有）。如果你只想支持部分平台，也可以设置成数组：
```json5
{
  // 选择你需要的平台
  "platforms": ["wechat", "alipay", "baidu", "rn"]
}
```

### use_rpx
是否使用[尺寸单位rpx](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)还是普通的像素单位`px`。默认值为false，即使用`px`

------

**注意：** 百度小程序暂时不支持`rpx`格式。

### trim_icon_prefix
如果你的图标有通用的前缀，而你在使用的时候又不想重复去写，那么可以通过这种配置这个选项把前缀统一去掉。

### default_icon_size
我们将为每个生成的图标组件加入默认的字体大小，当然，你也可以通过传入props的方式改变这个size值。

# Step 3
开始生成Taro组件
```bash
npx iconfont-taro
```
生成后查看您设置的保存目录中是否含有所有的图标

-------

在生成代码之前，你可以顺便参考[snapshots目录](https://github.com/fwh1990/taro-iconfont-cli/tree/master/snapshots)自动生成的快照文件。

# 使用
在page中使用图标
```jsx harmony
import IconFont from '../iconfont';

// 原色彩
<IconFont name="alipay" />

// 单色：红色
<IconFont name="alipay" color="red" />

// 多色：红色+橘色
<IconFont name="alipay" color="{{['red', 'orange']}}" size="300" />

// 不同格式的颜色写法
<IconFont name="alipay" color="{{['#333', 'rgb(50, 124, 39)']}}" />
```

# 更新图标
当您在iconfont.cn中的图标有变更时，只需更改配置`symbol_url`，然后再次执行`Step 3`即可生成最新的图标组件
```bash
# 修改 symbol_url 配置后执行：
npx iconfont-taro
```

# 扩展链接

React-Native：[react-native-iconfont-cli](https://github.com/fwh1990/react-native-iconfont-cli)
小程序：[mini-program-iconfont-cli](https://github.com/fwh1990/mini-program-iconfont-cli)

--------

欢迎使用，并给我一些反馈和建议，让这个库做的更好
