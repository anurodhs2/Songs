import {takeLatest, all} from 'redux-saga/effects';
import {fetchSongSaga} from './songSaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.FETCH_SONGS, fetchSongSaga)]);
}
