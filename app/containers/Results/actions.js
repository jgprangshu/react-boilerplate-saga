/*
 *
 * Results actions
 *
 */

import { DEFAULT_ACTION,AGE_DOWN,AGE_UP, LOADING, AGE_UP_ASYNC, FETCH_DATA, FETCH_DATA_ASYNC,FETCH_SINGLE_DATA} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function ageUp(){
  return{
    type: AGE_UP,
    payload: 1
  }
}

export function ageUpAsync(){
  return{
    type: AGE_UP_ASYNC,
    payload: 1,
  }
}

export function ageDown(){
  return{
    type: AGE_DOWN,
    payload: 1
  }
}

export function loading(){
  return{
    type: LOADING,
  }
}

export function fetchData(){
  return{
    type: FETCH_DATA,
  }
}

export function fetchDataAsync(response){
  return{
    type: FETCH_DATA_ASYNC,
    payload: response
  }
}

export function fetchIndivisualData(value,event){
  console.log(event)
  console.log(value)
  return{
    type: FETCH_SINGLE_DATA,
    // payload :event.target.checked
    payload: value
  }
}



