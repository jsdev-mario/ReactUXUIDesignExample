import React from 'react';


const CustomerCell = ({data}) => {
    const {id, name, userId, image, order} = data;
    const style = order > 0 ? "bg-blue" : "bg-amber";
    return (
        <tr
            tabIndex={-1}
            key={id}>
            <td>
                <div className="user-profile d-flex flex-row align-items-center">
                    <img
                        alt={name}
                        src={image}
                        className="user-avatar rounded-circle"
                    />
                    <div className="user-detail">
                        <h5 className="user-name">{name} </h5>
                        <p className="user-description">{userId} </p>
                    </div>
                </div>
            </td>
            <td className="text-right">
                <div className={`btn btn-sm text-uppercase btn-rounded ${style}`}>{order} Order</div>
            </td>
            <td className="text-right">
                <span className="icon-btn"><i className="zmdi zmdi-more-vert"/></span>
            </td>
        </tr>

    );
};

export default CustomerCell;
