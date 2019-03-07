import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ViewMessagesAccountContent from './ViewMessagesAccountContent';
import DirectMessage from './DirectMessage';
import ViewMessagesAccountDetails from './ViewMessagesAccountDetails';
import IntlMessages from 'util/IntlMessages';

class ViewMessageDetails extends React.Component {

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
            <Switch>
                <Route exact path={`${match.url}`} render={(props)=>{
                    props.match.params.id = this.state.id;
                    return (<ViewMessagesAccountContent {...props}/>)
                }}/>
                <Route path={`${match.url}/viewmessagecontent/details/:id`} component={ViewMessagesAccountDetails}/> 
                <Route path={`${match.url}/viewmessagecontent/directmessage`} component={DirectMessage}/> 
            </Switch> 
        );
    }
}


export default ViewMessageDetails;
