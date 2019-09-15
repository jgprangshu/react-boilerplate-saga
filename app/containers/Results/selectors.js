import { createSelector } from 'reselect';
import { initialState} from './reducer';



/**
 * Direct selector to the results state domain
 */

const selectResultsDomain = state => state.results || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Results
 */

const makeSelectResults = () =>
  createSelector(
    selectResultsDomain,
    substate => substate,
  );

  const makeSelectAge = () =>
    createSelector(
      selectResultsDomain,
      substate => substate.age
    )



  const makeSelectLoading = () =>
    createSelector(
      selectResultsDomain,
      substate => substate.loading
    )

    const makeSelectData = () =>
    createSelector(
      selectResultsDomain,
      substate => substate.data
    )

    const makeSelectChecked = () =>
    createSelector(
      selectResultsDomain,
      substate => substate.checked
    )


export { selectResultsDomain ,makeSelectResults, makeSelectAge,makeSelectLoading,makeSelectData,makeSelectChecked };
