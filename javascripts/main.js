"use strict";

const jquery = require("../node_modules/jquery/dist/jquery.min.js");
const jsonHandler = require("./jsonHandler.js");
const domHandler = require("./domHandler.js");

var songsDataArray = null;

jsonHandler.loadSongs(event)
.then((songData) => {
	songsDataArray = songData.songs;
	domHandler.populateSongs(songsDataArray); 
	return null;
});

$("#submitSongInfo").click((event) => {
	let newSong = {};

	if( $("#songName").val() !== "" &&
			$("#albumName").val() !== "" &&
			$("#artistName").val() !== ""){
		newSong.title = $("#songName").val();
		newSong.artist = $("#artistName").val();
		newSong.album = $("#albumName").val();
		songsDataArray.push(newSong);
		domHandler.populateSongs(songsDataArray); 
	}
});

module.exports = {songsDataArray};


