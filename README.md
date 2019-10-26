### 项目说明
>本项目属于企业官网传统项目，用的是jq+ajax传统方式，需要改为webpack多页面搭建，支持seo；只是改了webpack打包工具，里面代码基本没怎么变

## 配置参考
>本项目借助于webpack-seed搭建，查看具体配置文档请查看：
* [github](https://github.com/BiYuqi/webpack-seed).
* [官网说明](http://loadingmore.com/webpack-seed-site/).

**格式化代码**
```js
*内置Sass开发环境,
*Jq+ajax,
*Autoprefixer,
*EJS 模板编译,
*Base64 图片，雪碧图,
*集成代码风格校验Eslint,
*Es6,
*项目自身是支持axios
```

## 构建
``` bash

# 安装依赖
npm install

# 开发
npm run dev

# 生产
npm run build

# 代码检查
npm run lint

# 格式化代码
npm run prettier

# 自动跑所有校验
npm run ci
```

**支持命令行创建页面**

该命令支持创建页面四件套, 帮助快速构建页面, 无需重复coding
[README](./bin/README.md)
```js
npm run new
```
> 注：创建页面后需要重新执行`npm run dev`才能生效