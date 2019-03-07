import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import SocialAccountDetails from './SocialAccountDetails';
import IntlMessages from 'util/IntlMessages';

class ManageAccountsDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id
        };
    }

    componentWillMount(){
    }

    render() {

        const {match} = this.props;

        
        return (
            <div className="app-wrapper">
                <Switch>
                    <Route exact path={`${match.url}`} render={(props)=>{
                        props.match.params.id = this.state.id;
                        return (<ProfileDetails {...props}/>)
                    }}/>
                    <Route path={`${match.url}/socialaccount/:type`} component={SocialAccountDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default ManageAccountsDetails;
