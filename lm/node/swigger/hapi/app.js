const Hapi = require('hapi');
const routesHelloHapi = require('./routes');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const config = require('./config')
// 配置服务器启动 host 与端口
const server = new Hapi.Server({
    port: config.port,
    host: config.host,
});
const init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ]);
    server.route([
        ...routesHelloHapi
    ]);
    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();