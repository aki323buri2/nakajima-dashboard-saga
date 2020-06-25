import { takeLatest, put, call, } from 'redux-saga/effects'; 
import { 
  loading, 
  success, 
  failure, 
} from '../features/persons/personsSlice'
import fetchPersons from '../api/fetchPersons'; 
export const rootSaga = function *() {

  yield takeLatest(loading, processLoading);

  yield put(loading());
};

const processLoading = function *(action) {
  
  try {
    const data = yield call(fetchPersons);
    yield put(success(data));
  } catch (err) {
    yield put(failure(err));
  }
};
export default rootSaga; 