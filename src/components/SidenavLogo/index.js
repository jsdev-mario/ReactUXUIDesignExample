import React from 'react';
import {MINI_DRAWER} from 'constants/ActionTypes';

const SidenavLogo = ({drawerType}) => {

    const showMini = drawerType.includes(MINI_DRAWER);

    return (
        <div className="sidebar-header d-flex align-items-center" style={{ height: 120, padingRight: 18 }}>
            {showMini ?
                <div className="mini-logo">
                     <img className="d-none d-lg-block" alt='...' src='/assets/images/logo_jus.png'/>
                    <img className="d-block d-lg-none mr-3" alt='...' src='/assets/images/logo_jus.png'/>
                </div> : 
                 <img className="d-block mr-3" alt='...' src='/assets/images/logo_jus.png' style={{ width: 230 }}/>
            }
        </div>
    );
};

export default SidenavLogo;
