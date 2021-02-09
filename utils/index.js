const Fs = require('fs');
const { extname } = require('path');
const {config} = require('../config');


const _readDir = () => Fs.readdirSync(this.getSongsPAth(), { withFileTypes: true });
const _isMp3 = item => item.isFile && extname(item.name) === '.mp3';

exports.getSongsPAth = () => {
    return process.cwd() + config.SONGSPATH;

} 
exports.readSong = () => _readDir().filter(_isMp3)[0].name;
exports.readSongs = () => _readDir().filter(_isMp3).map((songItem) => songItem.name);

exports.discardFirstWord = str => str.substring(str.indexOf(' ') + 1);
exports.getFirstWord = str => str.split(' ')[0];

exports.generateRandomId = () => Math.random().toString(36).slice(2);

exports.TimeFormat = (duration) => {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
