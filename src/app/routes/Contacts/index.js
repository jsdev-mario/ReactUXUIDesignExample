import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ContactsContent from './Content';
import ContactsDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class Contacts extends React.Component {

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
                    <Route exact path={`${match.url}`} component={ContactsContent}/>
                    <Route path={`${match.url}/add`} component={ContactsDetails}/> 
                    <Route path={`${match.url}/details/:id`} component={ContactsDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default Contacts;
