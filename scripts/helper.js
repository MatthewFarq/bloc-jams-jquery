class Helper {
    playPauseAndUpdate(song) {
        player.playPause(song);
        if (song) {
            $('#time-control .total-time').text( song.duration );
        } else {
            $('#time-control .total-time').text( album.songs[0].duration );
        }
    }
}

const helper = new Helper();