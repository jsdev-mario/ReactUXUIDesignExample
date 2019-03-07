import React from 'react';
import {connect} from 'react-redux'
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

class UserInfo extends React.Component {
    render() {
        const {authUser} = this.props;
        return (
            <div>
                <div className="user-profile">
                    <img className="user-avatar border-0 size-40" src="/assets/images/avatar.jpg"
                         alt="User"/>
                        <div className="user-detail ml-2">
                            <h4 className="user-name mb-0">{authUser.nome}</h4>
                            <small>Administrator</small>
                        </div>
                </div>
                
                <a className="dropdown-item text-muted" href="javascript:void(0)" onClick={() => {
                    console.log('Try to logoput');
                    this.props.userSignOut()
                    this.props.history.push ('/login');
                }}>
                    <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1"/>
                    <IntlMessages id="menu.logout"/>
                </a>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    const {authUser} = user;
    return {authUser};
}

export default connect(mapStateToProps, {userSignOut})(UserInfo);


