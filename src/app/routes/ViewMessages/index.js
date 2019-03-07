import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ViewMessagesContent from './Content';
import ViewMessagesDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class ViewMessages extends React.Component {

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
                    <Route exact path={`${match.url}`} component={ViewMessagesContent}/>
                    <Route path={`${match.url}/details/:id`} component={ViewMessagesDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default ViewMessages;
