import React from 'react';

const NotificationItem = ({ notification }) => {
    const { icon, image, title, time } = notification;
    return (

        <li className="media">
            <img
                alt={image}
                src={image}
                className="avatar-sm rounded-circle mr-2 rounded-circle"
            />
            <div className="media-body align-self-center">
                <p className="sub-heading mb-0">{title}</p>
                <i className={`zmdi ${icon} zmdi-hc-fw`} /> <span className="meta-date"><small>{time}</small></span>
            </div>
        </li>
    );
};

export default NotificationItem;
