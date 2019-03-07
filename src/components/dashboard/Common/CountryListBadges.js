import React from 'react';

const CountryListBadges = ({country}) => {
    const {flagCode, name, badge} = country;
    return (
        <div className=" d-flex align-items-center">
            <i className={`flag flag-24 flag-${flagCode}`}/>
            <div className="px-3">{name} </div>
            <span className="ml-auto px-3 badge-pill badge badge-outline">{badge}</span>

        </div>

    )
};

export default CountryListBadges;
