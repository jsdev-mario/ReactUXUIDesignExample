import React from 'react';


const UserProfileCard = ({headerStyle}) => {
    return (
        <div className="jr-card jr-card-full-height text-center overflow-hidden">

            <div className={`jr-card-header-color ${headerStyle}`}>
                <div className="jr-card-header-top mr-0 mb-2">
                    <span className="jr-menu-icon mr-auto">
                        <span className="menu-icon"/>
                    </span>
                    <span className="icon-btn size-30"><i className="zmdi zmdi-more-vert zmdi-hc-lg"/></span>
                </div>

                <img className="rounded-circle size-80 mb-3"
                     src="http://via.placeholder.com/150x150" alt="Team Member"/>

                <div className="jr-card-hd-content">
                    <h4 className="mb-0">Chris Harris</h4>
                    <p className="sub-heading mb-0">Graphic Designer</p>
                </div>
            </div>
            <div className="jr-card-body">
                <p>Cenas in erat accumsan, hendrerit lorem vel, pulvinar odio. Quisque eu conva.</p>
            </div>
        </div>
    )
};

export default UserProfileCard;
UserProfileCard.defaultProps = {
    headerStyle: ''
};

