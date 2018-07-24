document.getElementById('flamethrower-link').onclick = (e) => {
    e.preventDefault();

    let player = document.getElementById('flamethrower-video');
    
    if (player.requestFullscreen) {
        player.requestFullscreen();
    } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
    }
}