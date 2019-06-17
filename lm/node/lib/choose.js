//命令行交互
const inquirer = require('inquirer');
module.exports = (songs) => inquirer.prompt([{
    name: 'song',
    type: 'list',
    message: `共有${songs.length}首歌，按下回车键播放`,
    choices: songs.map((song,index)=>`${index+1}${song.name}`)
}])