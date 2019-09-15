/*
 *
 * Results reducer
 *
 */
import produce from 'immer';
import { AGE_UP_ASYNC,AGE_DOWN, LOADING,FETCH_DATA_ASYNC,FETCH_SINGLE_DATA} from './constants';

export const initialState = {
  age : 21,
  loading : false,
  data: [],
  checked : false
};

/* eslint-disable default-case, no-param-reassign */
// const resultsReducer = (state = initialState, action) =>
//   produce(state, (/* draft */) => {
//     switch (action.type) {
//       case DEFAULT_ACTION:
//         break;
//     }
//   });

const resultsReducer = (state=initialState,action) =>{
      switch (action.type){
      //   case AGE_UP :
      //     return{
      //       ...state,
      //       age : state.age + action.payload,
      //       loading:false
      // }


      case AGE_UP_ASYNC:
        // console.log(action.respValue)
          return{
            ...state,
            age : state.age + action.payload,
            loading:false
      }
          
          

          case AGE_DOWN :
            return{
              ...state,
              age : state.age - action.payload,
              loading:false
          
            }

          case LOADING :
            return {
              ...state,
              loading :true
            }

          case FETCH_DATA_ASYNC:
            return{
              ...state,
              loading : false,
              data : action.payload
            }

          case FETCH_SINGLE_DATA:
            return{
              ...state,
              loading: false,
              checked : action.payload
            }

          default :
          return state
      }
        
}

export default resultsReducer;
