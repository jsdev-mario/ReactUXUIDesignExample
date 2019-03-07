import React from 'react';

const UserDetailCell = ({data}) => {
    const {id, name, image, about} = data;
    return (
        <tr
            tabIndex={-1}
            key={id}>
            <td className="pr-2 size-60">
                <div className="align-items-center py-1">
                    <img
                        alt={name}
                        src={image}
                        className="user-avatar avatar-shadow rounded-circle"/>
                </div>
            </td>
            <td>
                <div className="user-detail">
                    <h4 className="user-name text-capitalize">{name} </h4>
                    <p className="user-description">{about}</p>
                </div>
            </td>
            <td className="d-flex justify-content-end align-items-center p-0 mt-1">
                <span className="icon-btn"><i className="zmdi zmdi-more-vert"/></span>
            </td>
        </tr>

    );
};

export default UserDetailCell;
