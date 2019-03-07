import React, {Component} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import PropTypes from 'prop-types';
import CardLayout from "components/CardLayout/index";
import UserList from "./UserList";


function TabContainer({children, dir}) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class LatestNotifications extends Component {

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    constructor() {
        super();
        this.state = {
            activeTab: '1',
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <CardLayout styleName="col-lg-12">
                <div className="jr-card-header mb-3 d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className="card-heading mb-0">
                            <i className="zmdi zmdi-notifications-active mr-2"/>
                            Latest Notifications
                        </h3>
                    </div>
                    <span className="icon-btn size-30">
                        <i className="zmdi zmdi-more-vert"/>
                    </span>
                </div>

                <div className="tab-notifications px-4 border-bottom-0">
                    <Nav tabs className="nav-fill">
                        <NavItem className="nav-item">
                            <NavLink aria-selected="true" data-toggle="tab" role="tab"
                                     className={this.state.activeTab === '1' ? 'active' : ''}
                                     onClick={() => {
                                         this.toggle('1');
                                     }}>
                                App Notifications
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink aria-selected="true" data-toggle="tab" role="tab"
                                     className={this.state.activeTab === '2' ? 'active' : ''}
                                     onClick={() => {
                                         this.toggle('2');
                                     }}>
                                Announcements
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <UserList users={this.props.appNotification}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <UserList users={this.props.announcementsNotification}/>
                    </TabPane>

                </TabContent>
            </CardLayout>

        );
    }
}


export default LatestNotifications;