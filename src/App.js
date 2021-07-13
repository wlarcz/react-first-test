import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainter from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from "react-redux";
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainter />
        <Navbar />
        <div className='app-wrapper-content'>
        {/* <Suspense fallback={<div>Загрузка...</div>}>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        </Suspense> */}
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
  // return <Router basename={process.env.PUBLIC_URL}>
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;