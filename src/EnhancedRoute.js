import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const EnhancedRoute = (props) => {

  const {component: Component, layout: Layout, redirect, auth: isAuthorized, ...rest} = props;

  /*
   If `auth <Boolean>` and `layout <ReactElement>` have not been provided
   as EnhancedRoute attribute then we return default
   react-router-dom Route.
   */
  if (!props.hasOwnProperty('auth') && !props.hasOwnProperty('layout'))
    return <Route {...props} />;

  /*
   Depending on whether we passed `layout <ReactElement>`
   attribute or not, we define template.
   */
  const template = Layout ? <Layout><Component /></Layout> : <Component/>;

  /*
   If `layout <ReactElement>` has been provided and
   `auth <Boolean>` has not been provided we return
   Route wrapped in specified layout.
   */
  if (props.hasOwnProperty('layout') && !props.hasOwnProperty('auth'))
    return <Route {...rest} component={() => template}/>;

  /*
   If we are not authorized we redirect to specified path
   or render default Unauthorized page.
   */
  if (!isAuthorized) {
    return redirect ? <Redirect to={{pathname: redirect}}/> :
        <Route render={() => <div>Unauthorized</div>}/>;
  }

  /*
   If we reached this far it means we are authorized
   and we render protected route.
   */
  return <Route {...rest} render={() => template}/>;
};

EnhancedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  auth: PropTypes.bool,
  layout: PropTypes.func,
};