import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {EnhancedRoute as Route} from '../EnhancedRoute';


const SideBar = () => <div>Sidebar</div>;
const Header = () => <div>Header</div>;
const MainLayout = (props) => <div><Header/><SideBar/>{props.children}</div>;

const AdminPage = () => <div>Admin Page</div>;
const PublicPage = () => <div>Public Page</div>;


test('render default route with provided component', () => {
  const element = render(<Router><Route component={PublicPage}/></Router>);

  expect(element).toMatchSnapshot();
});

test('render route with provided layout and child component', () => {

  const element = render(<Router><Route layout={MainLayout} component={PublicPage}/></Router>);

  expect(element).toMatchSnapshot();
});

test('render and allow access to protected route with provided component', () => {
  const isAuthorized = true;
  const element = render(<Router><Route auth={isAuthorized} component={AdminPage}/></Router>);

  expect(element).toMatchSnapshot();
});

test('render and allow access to protected route with provided component and layout', () => {
  const isAuthorized = true;
  const element = render(<Router><Route auth={isAuthorized} layout={MainLayout} component={AdminPage}/></Router>);

  expect(element).toMatchSnapshot();
});

test('redirect to provided page when accessing protected route', () => {
  const isAuthorized = false;
  const element = render(<Router><Route auth={isAuthorized} redirect={'/login'} component={AdminPage}/></Router>);

  expect(element).toMatchSnapshot();
});

test('render default unauthorized page when accessing protected route', () => {
  const isAuthorized = false;
  const element = render(<Router><Route auth={isAuthorized} component={AdminPage}/></Router>);

   expect(element).toMatchSnapshot();
});
