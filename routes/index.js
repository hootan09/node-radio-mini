const express = require('express');
const { queue, playlist } = require('../engine');

const router = express.Router();

router.get('/',(req,res) =>{
    res.sendFile(`${__dirname}/../public/index.html`);
})

router.get('/stream', (req,res)=>{
    const { id, responseSink } = queue.makeResponseSink();
    req.app.sinkId = id;
    res.type('audio/mpeg').status(200);
    responseSink.pipe(res);
    req.on('close', function () {
        queue.removeResponseSink(req.app.sinkId);
        })
})

router.get('/songdetail', async(req,res)=>{
    res.status(200).json({
        songName:  playlist.getFocusedSong(),
        songImage: await queue.getSongImage() || ''
        
    })
})

module.exports = router;
