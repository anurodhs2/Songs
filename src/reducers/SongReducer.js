import * as CONST from '../utils/Constants';

const initialState = {
  songs: [],
  isFetching: false,
};

export default function SongReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.FETCH_SONGS:
      return {
        ...state,
        isFetching: true,
      };
    case CONST.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload.songs,
        isFetching: false,
      };
    case CONST.FETCH_SONGS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
