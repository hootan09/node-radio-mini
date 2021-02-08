const mm = require('music-metadata')
const Path = require('path')


async function test() {
    const metadata =await mm.parseFile('./1.mp3')
    console.log(metadata.format.bitrate);
    console.log(metadata.common.picture[0].data.toString('base64'));
}

test();