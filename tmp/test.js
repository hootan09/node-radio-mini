const mm = require('music-metadata')


async function test() {
    const metadata =await mm.parseFile('./Songs/m.mp3')
    console.log(metadata);
    console.log('duration: ',(metadata.format.duration/60).toFixed(2));
    // console.log(metadata.format.bitrate);
    // console.log(metadata.common.picture[0].data.toString('base64'));
}

test();