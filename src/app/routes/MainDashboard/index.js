import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainDashboardContent from './Content';
import MainDashboardDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class MainDashboard extends React.Component {

    constructor () {
        super ();
        this.state = {
            
        };
    }

    componentWillMount(){
    }

    render() {
        const {match} = this.props;

        
        return (
            <div className="app-wrapper">
                <Switch>
                    <Route exact path={`${match.url}`} component={MainDashboardContent}/>
                    <Route path={`${match.url}/details/:id`} component={MainDashboardDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default MainDashboard;
