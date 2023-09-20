import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const inFraime = new Vimeo.Player(ifraime);
const player = new Player(ifraime);
const CURRENT_TIME = "videoplayer-current-time";
player.on('timeupdate', throttle(onPlay, 1001));

console.log(inFraime);
console.log(vimeoPlayer);
console.log(player);
player.on('play', 'onPlay');

function onPlay ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds)
}
setCurrentTime()
function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIME)) {
    return
  }
}
    player.setCurrentTime.then(function(CURRENT_TIME) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':        
            break;
        default:
            break;
    }
});