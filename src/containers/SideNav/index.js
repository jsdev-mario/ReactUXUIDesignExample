import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from 'rc-drawer';
import {Config} from 'constants/ThemeColors';
import SidenavContent from './SidenavContent';
import SidenavLogo from 'components/SidenavLogo';
import {COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION} from 'constants/ActionTypes';
import {toggleCollapsedNav, updateWindowWidth} from 'actions/Setting';

class SideNav extends React.PureComponent {

    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.props.updateWindowWidth(window.innerWidth)
        });
    }

    render() {
        const {navCollapsed, drawerType, width, isDirectionRTL, navigationStyle, authUser} = this.props;
        let drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
        let type = true;
        if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
            type = false;
        }
        if (navigationStyle===HORIZONTAL_NAVIGATION) {
            drawerStyle = '';
            type = false;
        }
        if (!authUser){
            type=false;
        }

        return (
            <Drawer docked={type} className={`app-sidebar ${drawerStyle}`}
                    style={{overflow: 'auto'}}
                    touch={true}
                    position={isDirectionRTL ? 'right' : 'left'}
                    transitions={true}
                    enableDragHandle={true}
                    open={navCollapsed}
                    onOpenChange={this.onToggleCollapsedNav}
                    sidebar={<div className="side-nav">
                        <SidenavLogo drawerType={drawerType}/>
                        <SidenavContent/>
                    </div>}>
                <div/>
            </Drawer>
        );
    }
}

const mapStateToProps = ({settings, user}) => {
    const {navCollapsed, drawerType, width, isDirectionRTL, navigationStyle} = settings;
    const {authUser} = user;
    return {navCollapsed, drawerType, width, isDirectionRTL, navigationStyle, authUser}
};

export default withRouter(connect(mapStateToProps, {toggleCollapsedNav, updateWindowWidth})(SideNav));
