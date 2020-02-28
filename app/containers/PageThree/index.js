/**
 *
 * PageThree
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectPageThree from './selectors';

class PageThree extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      pageKey: 'pageThree',
      // eslint-disable-next-line react/no-unused-state
      result: null,
    };
    this.showAlert = this.showAlert.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Page3</title>
          <meta name="description" content="Description of Page3" />
        </Helmet>
        <p>Hello page 3</p>
        <p>The Result is.......</p>
        {this.state.result}
      </div>
    );
  }

  showAlert() {
    const msg = document.getElementById('ip').value;
    // eslint-disable-next-line no-alert
    alert(msg);
  }

  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const url = window.location.href;
    const arr = url.split('/');
    const param = arr[arr.length - 1];
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      result: param,
    });
  }
}

const mapStateToProps = createStructuredSelector({
  pageThree: makeSelectPageThree(),
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
)(PageThree);
