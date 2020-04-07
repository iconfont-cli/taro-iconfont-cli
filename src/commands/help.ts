#!/usr/bin/env node

import colors from 'colors';

console.log([
  '',
  'Usage:',
  '',
  '    ' + colors.green.bold('npx iconfont-init [--output]') + '     : Generate configuration file, default file name is iconfont.json',
  '    ' + colors.green.bold('npx iconfont-taro [--config]') + '     : Generate icon component',
  '',
].join('\n'));
