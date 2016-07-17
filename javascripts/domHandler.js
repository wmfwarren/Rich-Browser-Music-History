"use strict";

const jquery = require("../node_modules/jquery/dist/jquery.min.js");

function populateSongs(array){
	for(let i = 0; i < array.length; i++) {
		let currentItem = array[i];
		$("#songDisplay").prepend(`<div id="song__${i}" class="songEntry"><div>`);
		$(`#song__${i}`).append(`<h3 class="songName">${array[i].title}</h3>`);
		$(`#song__${i}`).append(`<p class="albumTitle">${array[i].album}</p>`);
		$(`#song__${i}`).append(`<p class="artistName">${array[i].artist}</p>`);
	} 
}

$("#addMusicInfo").hide();

$("#addMusic").click((event) => {
	$("#addMusicInfo").show();
	$("#songInfo").hide();
	$("#songDisplay").hide();
});

$("#songList").click((event) => {
	$("#addMusicInfo").hide();
	$("#songInfo").show();
	$("#songDisplay").show();
});


module.exports = {populateSongs};
