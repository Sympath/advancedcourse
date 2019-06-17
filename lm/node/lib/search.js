const req = require('./request')
module.exports = (keyWord) => req('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + encodeURIComponent(keyWord))