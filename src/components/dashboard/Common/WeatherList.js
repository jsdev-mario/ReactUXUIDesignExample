import React from 'react';
import {ListGroupItem} from 'reactstrap';

const WeatherList = ({weather}) => {
    const {img, temp, date} = weather;
    return (


        <ListGroupItem className="border-0 m-0">
            <div className=" d-flex align-items-center">
                <i className={"detail-icon text-blue-grey wi wi-owm-" + img}/>
                <span className="temp-point">{temp}<sup>0</sup>C</span>
                <span className="date">{date}</span>
            </div>
        </ListGroupItem>

    )
};

export default WeatherList;
