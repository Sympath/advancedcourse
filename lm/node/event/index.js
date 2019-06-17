const Events = require('events');
const ev = new Events();

ev.on('open',()=>{
    console.log('opne');
    
})
function callBack(params) {
    console.log('第二个回调');
    
}
ev.on('open', callBack)
ev.emit('open');
ev.removeListener('open', callBack);
ev.emit('open')
