#!/usr/bin/env bash

cp -f ./scripts/config/iconfont-js.json ./iconfont.json
npx ts-node src/commands/index.ts

cp -f ./scripts/config/iconfont-ts.json ./iconfont.json
npx ts-node src/commands/index.ts
