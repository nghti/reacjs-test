import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logoutRequest } from '../store/modules/auth/actions';
import { Header, Footer } from './Partials';

const DashboardLayout = (props) => {
  function logOut() {
    const { logoutRequest } = props;
    logoutRequest();
  }
  return (
    <>
      <Header
        logOut={logOut}
      />
      <div className="side-wrap">
        {props.children}
      </div>
      <Footer/>
    </>
  );
}

export default compose(withRouter, connect(null, { logoutRequest }))(DashboardLayout);
