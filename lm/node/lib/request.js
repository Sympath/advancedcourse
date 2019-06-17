const request = require('request');

module.exports = (url) => new Promise((resoule,rej)=>{
    request({
        url,
        json: true
    },(err,res,body)=>{
        if(err){
            console.log('error',err);
            rej(err);
        }else {
            resoule(body)
        }
    })
})