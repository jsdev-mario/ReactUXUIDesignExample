import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ManageAccountsContent from './Content';
import ManageAccountsDetails from './Details';

class ManageAccounts extends React.Component {

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
                    <Route exact path={`${match.url}`} component={ManageAccountsContent}/>
                    <Route path={`${match.url}/add`} component={ManageAccountsDetails}/> 
                    <Route path={`${match.url}/details/:id`} component={ManageAccountsDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default ManageAccounts;
