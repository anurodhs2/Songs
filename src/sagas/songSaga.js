import {put, call} from 'redux-saga/effects';
import {fetchSongsSuccess, fetchSongsFailure} from '../actions/songsAction';
import {secureGet} from '../utils/SendJSON';

export function* fetchSongSaga(action) {
  try {
    const data = yield call(secureGet, 'search?term=Michael+jackson');
    if (data && data.results) {
      yield put(fetchSongsSuccess(data.results));
    } else {
      yield put(fetchSongsFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchSongsFailure());
  }
}
