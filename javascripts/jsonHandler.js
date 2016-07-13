"use strict";

$( document ).ready(function() {

	var songData =  null;

	$(document).load((event) => {
		loadSongs(event)
		.then((songsData) => {
			songData = songsData;
			return null;
			});
		};

	var loadSongs = function(event) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: "../json/songs.json"
			}).done(function(data) {
	    	resovle(data);
	  	}).fail(function(xhr, status, error) {
	    	reject(error);
			});
		});
	};

module.exports = {songData};
}); //document ready closing 
