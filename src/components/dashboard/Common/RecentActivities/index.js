import React from 'react';

const RecentActivities = ({recentData}) => {
    const {image, title, date, color, borderColor} = recentData;
    return (
        <div className="media social-list-line">

            <div
                className={`border-${borderColor} bg-white icon-btn user-avatar size-40 z-index-20 align-item-self mr-3`}>
                <i className={`zmdi zmdi-${image} text-${color} zmdi-hc-fw`}/>
            </div>
            <div className="media-body">
                <h4 className="mb-1">{title}</h4>
                <p className="meta-date">{date}</p>
            </div>
        </div>
    );
};

export default RecentActivities;