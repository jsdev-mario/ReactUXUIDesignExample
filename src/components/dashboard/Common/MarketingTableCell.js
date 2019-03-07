import React from 'react';

const MarketingTableCell = ({data}) => {
    const {id, name, desc, icon, color, budget, growth} = data;
    const iconName = growth > 0 ? "up" : "down";
    const statusStyle = growth > 0 ? " text-success" : "text-danger";
    return (
        <tr
            tabIndex={-1}
            key={id}
        >
            <td>
                <div className="user-profile py-1 d-flex flex-row align-items-center">
                    <span className={`icon-btn size-40 align-self-start mr-3  ${color}`}>
                        <i className={`zmdi zmdi-${icon} text-white zmdi-hc-lg`}/>
                    </span>
                    <div className="user-detail">
                        <h4 className="user-name">{name} </h4>
                        <p className="user-description">{desc}</p>
                    </div>
                </div>
            </td>

            <td className="text-right">
                <div className={`${statusStyle}`}>
                    <i className={`zmdi zmdi-trending-${iconName}`}/> {growth}
                </div>
                <div className="text-muted text-capitalize">{iconName}</div>
            </td>
        </tr>

    );
};

export default MarketingTableCell;
