module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        // console.log(reply,'====');
        return 'Hello World!';
    },
    config: {
        auth: false,
        tags: ['api','tests'],
        description: '测试'
    }
}]