



let selectSound = document.querySelector('audio');
selectSound.volume = 0.2;
//const track = audioContext.createMediaElementSource(audioElement);
//selectSound.load();







function playSelect(){
    selectSound.play();
}

export {playSelect};
