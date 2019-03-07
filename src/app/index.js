import React from 'react';
import {withRouter} from 'react-router-dom'
import {Redirect,Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import SignUp from './routes/Auth/SignUp';
import Login from './routes/Auth/Login';
import Home from './routes/Home';
import MainDashboard from './routes/MainDashboard';
import ManageAccounts from './routes/ManageAccounts';
import ManagePosts from './routes/ManagePosts';
import ViewMessages from './routes/ViewMessages';
import SocialCalendar from './routes/SocialCalendar';
import Invoices from './routes/Invoices';
import Contacts from './routes/Contacts';
import GeneralData from './routes/GeneralData';
import Tour from 'components/tour/index'
import CircularProgress from 'components/CircularProgress'


import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    HORIZONTAL_NAVIGATION
} from 'constants/ActionTypes';

import {
    hideMessage,
} from 'actions'

import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';


const RestrictedRoute = ({component: Component, authUser, ...rest}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />}
    />;

class RouterApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showMsg: false,
        }
    }

    componentWillMount(){
        
    }

    componentDidUpdate () {
        
    }

    componentWillReceiveProps(newProps){
        if (this.props.showMessage && newProps.showMessage){
            this.setState({
                showMsg: false
            })
        }else{
            this.setState({
                showMsg: newProps.showMessage
            })
        }
        if (newProps.showMessage) {
            this.props.hideMessage ();
        }
    }



    render() {
        const {match, navigationStyle, horizontalNavPosition, authUser} = this.props;
        const {
            loader, alertMessage
        } = this.props;
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        } else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }
        
        return (
            
            <div className="app-container">            
                <Tour/>
                <Sidebar/>
                <div className="app-main-container">
                    <div className="app-header">
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}
                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <RestrictedRoute exact from={`${match.url}`} component={MainDashboard} authUser={authUser}/>
                                <Route path={`${match.url}login`} component={Login}/> 
                                <Route path={`${match.url}signup`} component={SignUp}/>
                                <RestrictedRoute path={`${match.url}maindashboard`} component={MainDashboard}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}manageaccounts`} component={ManageAccounts}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}manageposts`} component={ManagePosts}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}viewmessages`} component={ViewMessages}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}socialcalendar`} component={SocialCalendar}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}contacts`} component={Contacts}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}generaldata`} component={GeneralData}  authUser={authUser}/>
                                <RestrictedRoute path={`${match.url}invoices`} component={Invoices}  authUser={authUser}/>
                                <Route component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                        </div>
                        {/* <Footer/> */}
                    </main>
                </div>
                {
                loader &&
                    <div className="loader-view">
                        <CircularProgress />
                    </div>
                }
                {this.state.showMsg && alertMessage.type === 'error' && NotificationManager.error (alertMessage.message, 'Erro')}
                {this.state.showMsg && alertMessage.type === 'success' && NotificationManager.success (alertMessage.message, 'Sucesso')}
                {this.state.showMsg && alertMessage.type === 'warning' && NotificationManager.warning (alertMessage.message, 'Aviso')}
                <NotificationContainer />
            </div>
        );
    }
}


const mapStateToProps = ({settings, user, ui}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    const { loader, alertMessage, showMessage} = ui;
    const { authUser } = user;
    return {drawerType, navigationStyle, horizontalNavPosition, authUser, loader, alertMessage, showMessage}
};
export default withRouter(connect(mapStateToProps, {
    hideMessage,
})(RouterApp));