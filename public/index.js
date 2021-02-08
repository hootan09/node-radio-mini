const audio = document.querySelector('audio');
audio.addEventListener('loadeddata', async(e) => {
    let res = await fetch(`${window.location.href}songdetail`);
        let songData =await res.json();
        document.getElementById("title").innerHTML = songData.songName;
        if(songData.songImage){
            document.getElementById("logo").src = "data:image/png;base64,"+ songData.songImage;
        }
});