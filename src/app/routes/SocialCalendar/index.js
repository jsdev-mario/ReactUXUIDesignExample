import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SocialCalendarContent from './Content';
import SocialCalendarDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class SocialCalendar extends React.Component {

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
                    <Route exact path={`${match.url}`} component={SocialCalendarContent}/>
                    <Route path={`${match.url}/add`} component={SocialCalendarDetails}/> 
                    <Route path={`${match.url}/details/:id`} component={SocialCalendarDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default SocialCalendar;
