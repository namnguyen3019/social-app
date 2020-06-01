import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropsTypes from 'prop-types';
const AuthRoute = ({ conponent: Component, authenticated, ...rest }) => (
    //Crazy syntax
    <Route 
        {...rest}
        render={(props) => authenticated === true ? <Redirect to="/" /> : <Component {...props} />}
    
    />

);

AuthRoute.PropsTypes = {
    user: PropsTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
});
export default connect(mapStateToProps)(AuthRoute);
