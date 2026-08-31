"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Build a Playlist Remix Engine
In this lab, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.

Each listener provides a list of songs they want to hear. Some songs may appear more than once, 
and some artists may show up too many times. Your job is to work through these playlists step by step: 
combine them into one list, score each song, remove duplicate songs, 
limit how often the same artist appears, and then create a final play order.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named flattenPlaylists that accepts an array of playlists where each 
playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. 
If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. 
You can use this example to test out your function.

flattenPlaylists should return a flat array of track objects, where each object includes all the 
original track properties plus a source property set to an array with the playlist index and the track 
index indicating where the track originated.

You should create a function named scoreTracks that accepts an array of track objects as returned by 
flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and 
returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

You should create a function named dedupeTracks that accepts an array of track objects as returned by 
scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first 
occurrence of each.

You should create a function named enforceArtistQuota that accepts an array of track objects as returned 
by dedupeTracks and a number representing the maximum allowed occurrences per artist. 
The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.

You should create a function named buildSchedule that accepts an array of track objects as returned by 
enforceArtistQuota and returns a new array of { slot, trackId } objects, 
where slot is a 1-based index representing each track's position in the broadcast order.

You should create a function named remixPlaylist that accepts an array of playlists and the maximum number 
of allowed occurrences per artist. The function should return the final broadcast schedule as an array of 
{ slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.
 */
var playlists = [[{
  trackId: "trk101",
  artist: "Velvet Comet",
  title: "Crimson Afterglow",
  votes: 5,
  bpm: 122
}, {
  trackId: "trk102",
  artist: "Neon Harbor",
  title: "Static Horizon",
  votes: 2,
  bpm: 108
}, {
  trackId: "trk103",
  artist: "Lunar Arcade",
  title: "Midnight Frequency",
  votes: 4,
  bpm: 128
}], [{
  trackId: "trk201",
  artist: "Solar Echo",
  title: "Glass Skyline",
  votes: 3,
  bpm: 115
}, {
  trackId: "trk202",
  artist: "Velvet Comet",
  title: "Satellite Hearts",
  votes: 6,
  bpm: 124
}]];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  return playlists.flatMap(function (playlist, idx) {
    return playlist.map(function (el, indx) {
      return _objectSpread({}, el, {
        source: [idx, indx]
      });
    });
  });
}

function scoreTracks(tracks) {
  return tracks.map(function (track) {
    return _objectSpread({}, track, {
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    });
  });
}

function dedupeTracks(tracks) {
  var uniqueTracks = [];
  var trackIds = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tracks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var track = _step.value;

      if (!trackIds.includes(track.trackId)) {
        uniqueTracks.push(track);
        trackIds.push(track.trackId);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return uniqueTracks;
}

function enforceArtistQuota(tracks, maxOccurence) {
  return tracks.slice(0, maxOccurence);
}

function buildSchedule(tracks) {
  var newArr = [];

  for (var i = 0; i < tracks.length; i++) {
    newArr.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return newArr;
}

function remixPlaylist(playlists, maxOccurence) {
  playlists = flattenPlaylists(playlists);
  playlists = scoreTracks(playlists);
  playlists = dedupeTracks(playlists);
  playlists = enforceArtistQuota(playlists, maxOccurence);
  return buildSchedule(playlists);
}