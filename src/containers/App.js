import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import 'react-toggle-switch/dist/css/switch.min.css';
import 'rc-drawer/assets/index.css';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import 'styles/app-rtl.scss';
import AppLocale from '../lngProvider';

import RouterApp from '../app';

class App extends Component {

    componentDidMount(){
        
    }


    render() {
        const {match, locale} = this.props;
        const currentAppLocale = AppLocale[locale.locale];
        
        return (
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
            >
                <div className="app-main">
                    <Route path={match.url} component={RouterApp}/>
                </div>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({settings, user}) => {
    const {locale, isDirectionRTL} = settings;
    const {authUser} = user;

    return {locale, isDirectionRTL, authUser}
};

export default connect(mapStateToProps, null)(App);
