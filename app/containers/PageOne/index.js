/**
 *
 * PageOne
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import makeSelectPageOne from './selectors';
import PageTwo from '../PageTwo/Loadable';
import ReactTable from 'react-table';
import saga from './saga';
import {LOAD_EMPLOYEE_DATA} from './constants';

class PageOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      pageKey: 'pageOne',
      ip1: 0,
      posts: [],
    };
    this.showAlert = this.showAlert.bind(this);
    this.handleInput = this.handleInput.bind(this);
    //this.props.store.dispatch()
    //this.state.dispatch();
  }

  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        style:{
          textAlign: "right"
        },
        width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header: "Email",
        accessor: "email",
        style:{
          textAlign: "right"
        },
        width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header: "FirstName",
        accessor: "first_name",
        sortable: false,
        filterable: false
      },
      {
        Header: "LastName",
        accessor: "last_name",
        sortable: false,
        filterable: false
      },
      {
        Header: "Avatar",
        accessor: "avatar",
        sortable: false,
        filterable: false
      },
    ]

    return (
      <div>
        <Helmet>
          <title>PageOne</title>
          <meta name="description" content="Description of PageOne" />
        </Helmet>
        <p>Hello page 1</p>
        <p>Enter input 1</p>
        <p>{this.props.empData ? 8 : 0 } </p >
      </div>
    );
  }

  handleInput(e) {
    this.setState({
      ip1: e.target.value,
    });
  }

  showAlert() {
    // const msg = document.getElementById('ip').value;
    // eslint-disable-next-line no-alert
    // alert(msg);
    // this.ip1 = msg;
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   const url = 'https://reqres.in/api/users?page=1';
  //   // fetch(url, {
  //   //   method: 'GET',
  //   // }).then(response => console.log(response.json().)).then(data => {
  //   //   console.log(data.data);
  //   //   this.setState({posts: data});
  //   // });-
  //   fetch(url, {
  //     method: 'GET',
  //   }).then(d => {this.setState({posts: d})});
  // }

  componentDidMount(){
    // const url = 'https://reqres.in/api/users?page=1';
    // const data = fetch(url, {
    //   method:"GET"
    // }).then(response => response.json()).then(posts => {
    //   this.setState({posts: posts});
    // });
  };

}

const mapStateToProps = createStructuredSelector({
  pageOne: makeSelectPageOne(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PageOne);
