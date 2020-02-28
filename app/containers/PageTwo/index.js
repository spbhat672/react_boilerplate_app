/* eslint-disable react/no-unused-state */
/**
 *
 * PageTwo
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import makeSelectPageTwo from './selectors';
import PageThree from '../PageThree/Loadable';

class PageTwo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageKey: 'pageTwo',
      ip2: null,
      res: null,
      ip1: null,
    };
    this.showAlert = this.showAlert.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>PageOne</title>
          <meta name="description" content="Description of PageOne" />
        </Helmet>
        <p>Hello page 2</p>
        {this.state.ip1}
        <p>Enter input 2</p>
        <input id="ip" type="number" onChange={this.handleInput} />
        <form>
          <NavLink
            // eslint-disable-next-line no-template-curly-in-string
            to={`../pageThree/${this.state.res}`}
            component={PageThree}
            props={this.state.ip2}
          >
            <input type="submit" value="Next" />
          </NavLink>
        </form>
      </div>
    );
  }

  showAlert() {
    // eslint-disable-next-line no-alert
    alert(this.state.ip1);
  }

  handleInput(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const input1 = this.state.ip1;
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      ip2: e.target.value,
      res: Number.parseInt(input1, 10) * Number.parseInt(e.target.value, 10),
    });
  }

  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const url = window.location.href;
    const arr = url.split('/');
    const param = arr[arr.length - 1];
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      ip1: param,
    });
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    // const { input1 } = this.props;
    // this.setState({
    // eslint-disable-next-line react/no-unused-state
    // ip1: input1,
    // });
  }
  
}

const mapStateToProps = createStructuredSelector({
  pageTwo: makeSelectPageTwo(),
});

function mapDispatchToProps(dispatch) {
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
)(PageTwo);
