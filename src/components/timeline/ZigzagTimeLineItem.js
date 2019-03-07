import React from 'react';

const ZigzagTimeLineItem = ({styleName, color, timeLine, children}) => {
    const {time, title, image, description} = timeLine;
    return (
        <div className={`timeline-item timeline-time-item ${styleName}`}>
            <div className="timeline-time">{time}</div>
            <div className={`timeline-badge bg-${color}`}>{children}</div>

            <div className="timeline-panel ">
                <div className="timeline-panel-header">

                    <div className="timeline-header-img timeline-left">
                        <img className="size-60 rounded-circle" src={image} alt="Pentagon" title="Pentagon"/>
                    </div>
                    <div className="timeline-heading">
                        <h5>{time}</h5>
                        <h3 className="timeline-title">{title}</h3>
                    </div>
                </div>
                <div className="timeline-body">
                    <p className="card-text">{description} </p>
                </div>
            </div>
        </div>
    )
};

export default ZigzagTimeLineItem;