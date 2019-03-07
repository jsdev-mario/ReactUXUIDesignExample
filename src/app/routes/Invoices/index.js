import React from 'react';
import {Route, Switch} from 'react-router-dom';
import InvoicesContent from './Content';
import InvoicesDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class Invoices extends React.Component {

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
                    <Route exact path={`${match.url}`} component={InvoicesContent}/>
                    <Route path={`${match.url}/details/:id`} component={InvoicesDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default Invoices;
