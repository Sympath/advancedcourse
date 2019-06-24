const hapiSwagger = require("hapi-swagger");
const inert = require("inert");
const vision = require("vision");
const package = require("package");

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options: {
            info: {
                title: "接口文档", // 文档的标题
                version: package.version // 文档的版本
            },
            // 定义接口以tags属性为分类【定义分类的大标题】,给./routes路由的配置config:tags使用
            grouping: "tags",
            // 标签，用于对应路由config定义的tags进行归类
            tags: [{
                name: "test",
                description: "测试相关"
            }],
            lang: 'zh-cn' // 文档语言
        }
    }
];