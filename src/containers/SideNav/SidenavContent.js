 import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {

    componentDidMount() {
        const that = this;
        
        const menuLi = document.getElementsByClassName('sub-menu-title');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                this.parentElement.classList.toggle('open');
            }
        }

        
    }

    render() {
        return (
            <CustomScrollbars className="scrollbar" style={{height: 'calc(100vh - 70px)'}}>
                <ul className="nav-menu">

                    <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)" className="sub-menu-title">
                                <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                                <span className="nav-text">{<IntlMessages id="sidebar_main_dashboard"/>}</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/maindashboard">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_maindashboard"/>}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>


                    <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)" className="sub-menu-title">
                                <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                                <span className="nav-text">{<IntlMessages id="sidebar_main_socialnetwork"/>}</span>
                        </a>
                        <ul className="sub-menu">
                            <li >
                                <NavLink to="/manageaccounts">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_manageaccounts"/>}</span>
                                </NavLink>
                                <NavLink to="/manageposts">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_manageposts"/>}</span>
                                </NavLink>
                                <NavLink to="/viewMessages">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_viewmessages"/>}</span>
                                </NavLink>
                                <NavLink to="/socialcalendar">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub__socialcalendar"/>}</span>
                                </NavLink>
                                <NavLink to="/contacts">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_managecontacts"/>}</span>
                                </NavLink>
                                <NavLink to="/estatistics">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_estatistics"/>}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>


                    <li className="ui_tooltip menu">
                        <a role="button" href="javascript:void(0)" className="sub-menu-title">
                                <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                                <span className="nav-text">{<IntlMessages id="sidebar_main_settings"/>}</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/generaldata">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_generaldata"/>}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/invoices">
                                    <span className="nav-text">{<IntlMessages id="sidebar_sub_invoices"/>}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
