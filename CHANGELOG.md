# 3.1.2
[fix] 修复eslint可能会报错的问题

# 3.1.1
[fix] 修复`useGlobalIconFont`中的路径在windows系统上使用了反斜杆的问题

# 3.1.0
[feat] 新增属性 `design_width` 以适配h5场景下的设计尺寸

# 3.0.0

依赖升级到 Taro3.0

# 2.1.0
[feat] 删除 h5 和 rn 的用不上的类型定义文件
<br>
[fix] 修复rn场景下，多个库同时引用`react-native-svg`时app会报错的问题

# 2.0.0
**[breaking]** 移除属性 `component_name`，一律使用 IconFont 作为组件名称
<br>
**[breaking]** 不再导出模块的名字，一律使用 `export default XXX`
<br>
[chore] 升级包 react-native-iconfont-cli 和 react-iconfont-cli

# 1.2.0
[feat] npx iconfont-init 增加 `--output` 选项，可传入配置输出路径，默认为 iconfont.json
<br>
[feat] npx iconfont-taro 增加 `--config` 选项，可传入配置文件路径，默认为 iconfont.json

# 1.1.2
[chore] 升级包 react-native-iconfont-cli
<br>
[chore] 升级包 react-iconfont-cli

# 1.1.1
[fix] 修复h5在js模式下没有默认字号问题
<br>
[chore] 升级包 react-native-iconfont-cli 和 react-iconfont-cli
<br>
[chore] 锁定部分deps的版本号

# 1.1.0
[feat] 配置增加`component_name`，可配置导出的组件名称
<br>
[feat] 组件新增导出实际模块名，`export { xxx } from 'yyy'`

# 1.0.5
[fix] 修复使用npm安装时生成组件失败的问题

# 1.0.4
[fix] 修复 taro无法编译到 h5 平台的问题

# 1.0.3
[fix] 兼容 node v8.5.0 以下的版本

# 1.0.2

[enhance] 不需要再额外配置`copy.patterns`到文件`config/index.js`中
<br>
[enhance] H5增加rem布局兼容rpx
<br>
[enhance] RN增加布局兼容rpx
<br>
[fix] 修复图标名称的前缀符号没有全部清除的问题
<br>
[fix] 修复rpx布局中，图标与文字大小缩放不一致问题
<br>
[fix] 修复rpx布局中，图标线条溢出并被切割的问题

# 1.0.1

[fix] 修复rpx布局时图标内容渲染到顶部问题

# 1.0.0
[feat] 支持Taro中所有主流平台的图标转换
