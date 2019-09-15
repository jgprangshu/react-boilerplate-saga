/**
 *
 * Results
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectResults, makeSelectAge, makeSelectLoading,makeSelectData,makeSelectChecked } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getByValue } from 'react-testing-library';
import { ageUp, ageDown, fetchData,fetchIndivisualData } from './actions';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { TableBody } from '@material-ui/core';



export function Results(props) {
  useInjectReducer({ key: 'results', reducer });
  useInjectSaga({ key: 'results', saga });

 
  
  return (
    <React.Fragment>
      <Helmet>
        <title>Results</title>
        <meta name="description" content="Description of Results" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      

      <h3>Age :</h3>{props.loading ? <p>Loading...</p> : <h3>{props.age}</h3>}
      <button onClick={props.onAgeUp}>AgeUp</button> &nbsp;
      <button onClick={props.onAgeDown}>AgeDown</button> &nbsp;
      <button onClick={props.onGetData}>Get Data</button>
      
    
      <Table>
        <TableHead>

          <TableRow>
            <TableCell padding="checkbox"><Checkbox /> </TableCell>
            <TableCell>UserId</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>
        {props.data.map(dataItems => 
          <TableRow key={dataItems.id}>
            
              <React.Fragment>
                  <TableCell padding="checkbox" checked={props.checked} onChange={(event)=> props.onCheck(dataItems.id,event)}><Checkbox /></TableCell>
                  <TableCell >{dataItems.userId}</TableCell> 
                  <TableCell >{dataItems.id}</TableCell> 
                  <TableCell>{dataItems.title}</TableCell> 
              </React.Fragment>
        
            
          </TableRow>
  )}
        </TableBody>
      </Table>
      

    </React.Fragment>
  );
  }


// Results.propTypes = {
//   // dispatch: PropTypes.func.isRequired,
//   age : PropTypes.any,
//   loading : PropTypes.any,
//   results :PropTypes.object
// };

const mapStateToProps = createStructuredSelector({
  results: makeSelectResults(),
  age: makeSelectAge(),
  loading: makeSelectLoading(),
  data : makeSelectData(),
  checked: makeSelectChecked()
});

function mapDispatchToProps(dispatch) {
  return {
    onAgeUp: () => dispatch(ageUp()),
    onAgeDown: () => dispatch(ageDown()),
    onGetData:() => dispatch(fetchData()),
    onCheck: (value,event) =>  dispatch(fetchIndivisualData(value,event))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Results);
