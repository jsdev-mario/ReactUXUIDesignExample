import React from 'react';

class OrderTableCell extends React.Component {

    render() {
        const {id, orderId, name, image, orderDate, deliveryDate, status} = this.props.data;
        const statusStyle = status.includes("Completed") ? "text-white bg-success" : status.includes("On Hold") ? "bg-amber" : status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
        return (
            <tr
                tabIndex={-1}
                key={id}
            >
                <td>{orderId}</td>
                <td>
                    <div className="user-profile d-flex flex-row align-items-center">
                        <img
                            alt={name}
                            src={image}
                            className="user-avatar rounded-circle mr-3"
                        />
                        <div className="user-detail">
                            <h5 className="user-name">{name} </h5>
                        </div>
                    </div>
                </td>
                <td>{orderDate}</td>
                <td>{deliveryDate}</td>
                <td className="status-cell text-right">
                    <div className={` badge text-uppercase ${statusStyle}`}>{status}</div>
                </td>
                <td className="text-right">
                    <span className="icon-btn size-30">
                        <i className="zmdi zmdi-more-vert zmdi-hc-lg"/></span>
                </td>
            </tr>

        );
    }
}

export default OrderTableCell;
