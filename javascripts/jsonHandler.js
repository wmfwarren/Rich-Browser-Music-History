"use strict";


var loadSongs = function(event) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "../json/songs.json"
		}).done(function(data) {
    	resolve(data);
  	}).fail(function(xhr, status, error) {
    	reject(error);
		});
	});
};

/////***Event listeners***\\\\\


module.exports = {loadSongs};
