import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ManagePostsContent from './Content';
import ManagePostsDetails from './Details';
import IntlMessages from 'util/IntlMessages';

class ManagePosts extends React.Component {

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
                    <Route exact path={`${match.url}`} component={ManagePostsContent}/>
                    <Route path={`${match.url}/add`} component={ManagePostsDetails}/> 
                    <Route path={`${match.url}/details/:id`} component={ManagePostsDetails}/> 
                </Switch> 
            </div>
        );
    }
}


export default ManagePosts;
