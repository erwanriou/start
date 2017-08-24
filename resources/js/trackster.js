var Trackster = {};
const API_KEY = "2c932bb7d57001451a6f847b8c7213d2";

$(document).ready(function() {
  $(".search-btn").click(function() {
    Trackster.searchTracksByTitle($("#input").val());
  });
});

Trackster.renderTracks = function(tracks) {
  var $music = $("#music");
  $music.empty();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    var mediumAlbumArt = track.image[1]["#text"];
    var htmlTrack =
        '<div class="track">' +
          '<div class="column1">' +
            '<a href="' + track.url + '" target="_blank">' + '<i class="fa fa-play-circle-o" aria-hidden="true"></i></a>' +
          '</div>' +
          '<div class="column1">' +
            '<span id="Name">' + track.name + '</span>' +
          '</div>' +
          '<div class="column2">' +
            '<span id="Artist">' + track.artist + '</span>' +
          '</div>' +
          '<div class="column2">' +
            '<img id="Artwork" src="' + mediumAlbumArt + '" alt="Artwork">' +
          '</div>' +
          '<div class="column2">' +
            '<span id="Listeners">' + track.listeners + '</span>' +
          '</div>' +
        '</div>';
    $music.append(htmlTrack);
  }
};

Trackster.searchTracksByTitle = function(title) {
  $.ajax({url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json", success: function(response) {
    Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};

function clearText() {
  document.getElementById("input").value= "";
};












/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
