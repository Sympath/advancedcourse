const Event = require('events');
let ev = new Event();
const req = require('./lib/request')
const Player = require('player');

['search','choose'].forEach(evName=>{
    const fn = require(`./lib/${evName}`)
    ev.on(evName,async (...args)=>{
        const data = await fn(...args);
        console.log(data);
        ev.emit('handle', evName, data, ...args)
    });
})
ev.on('handle',(key,res,...args)=>{
    switch (key) {
        case 'search':
            return ev.emit('afterSearch',res,args[0])
        case 'choose':
            return ev.emit('afterChoose',res,args[0])
    
        default:
            break;
    }
})
ev.on('afterSearch',async (selected,songs)=>{
    const selectedSong = songs.find((song,i)=>{
        return selected == `${i}${song.name}`
    })
    if(selectedSong){
        const {id} = selectedSong;
        const songDetail = await req('http://neteasecloudmusicapi.zhaoboy.com/song/url?id='+id);
        const {url:songUrl} = songDetail.data[0]
        let player = new Player(songUrl);
        player.play();
    }
    
})
ev.on('afterChoose', (res, keyword) => {

})


function main(params) {
    const argv = process.argv.slice(2);
    // console.log(argv);
    let keyWord = argv[0]
    console.log(keyWord);
    ev.emit('search',keyWord)
    
    
}
main()