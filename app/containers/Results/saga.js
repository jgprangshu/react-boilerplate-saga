import { take, call, put, select ,takeLatest,delay} from 'redux-saga/effects';
import { AGE_UP,FETCH_DATA,FETCH_SINGLE_DATA} from './constants';
import { loading, ageUpAsync, fetchDataAsync} from './actions';
import axios from 'axios'
import { push } from 'connected-react-router';


// Individual exports for testing

export function* ageAsync(){
  yield put (loading())
  yield delay(4000)          
  yield put(ageUpAsync())
}

export function* dataAsync(){
  // yield put (loading())
  const resp = yield call(axios.get,'https://jsonplaceholder.typicode.com/posts')
  yield put(fetchDataAsync(resp.data))
  console.log(resp.data)
}

export function* dataSingleAsync(action){
  console.log('reached saga and the action is ', action.payload)
  const id = action.payload
  yield put(push('/'))                
  const resp = yield call(axios.get,`https://jsonplaceholder.typicode.com/posts/${id}`)
  console.log(resp)
  
}


export default function* resultsSaga() {
  // See example in containers/HomePage/saga.js
    yield takeLatest(AGE_UP, ageAsync)
    yield takeLatest(FETCH_DATA,dataAsync)
  const action = yield takeLatest(FETCH_SINGLE_DATA,dataSingleAsync)
}
