import React from 'react';

const UserCell = ({user}) => {
    const {id, title, image, desc} = user;
    return (

        <div key={id} className="user-profile d-flex flex-row align-items-center">
            <img
                alt={title}
                src={image}
                className="user-avatar rounded-circle mr-2"
            />
            <div className="user-detail">
                <h5 className="text-muted text-uppercase mb-0">
                    <small>{title}</small>
                </h5>
                <div className="user-description">{desc}</div>
            </div>
        </div>

    );
};

export default UserCell;
