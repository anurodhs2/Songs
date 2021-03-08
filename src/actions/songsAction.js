import * as CONST from '../utils/Constants';

export function fetchSongs() {
  return {
    type: CONST.FETCH_SONGS,
  };
}

export function fetchSongsSuccess(songs) {
  return {
    type: CONST.FETCH_SONGS_SUCCESS,
    payload: {
      songs: songs
    }
  };
}

export function fetchSongsFailure() {
  return {
    type: CONST.FETCH_SONGS_FAILURE,
  };
}
