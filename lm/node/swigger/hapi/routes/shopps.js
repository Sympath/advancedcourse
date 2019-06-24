module.exports = [
    {
         method: 'GET',
             path: '/shops',
             handler: (request, reply) => {
                 // console.log(reply,'====');
                 return 'Hello shops!';
             },
             config: {
                 tags: ['api', 'shps'],
                 description: '商品'
             }
    },{
        method: 'GET',
            path: '/shops/{shopId}',
            handler: (request, reply) => {
                // console.log(reply,'====');
                return 'Hello 详情页!';
            },
            config: {
                tags: ['api', 'shop_detail'],
                description: '详情页'
            }
    }
]