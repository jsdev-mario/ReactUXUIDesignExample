import React from 'react';

const YourDailyFeedCell = ({feed}) => {
    const {id, title, time, image, isSocial} = feed;
    return (
        <div key={id} className="media user-profile">
            <img
                alt={image}
                src={image}
                className="user-avatar rounded-circle mr-2"
            />
            <div className="media-body align-self-center">
                <h5 className="mb-1">{title} </h5>
                <span className="meta-date">{time} </span>
                {isSocial &&
                <div className="my-2 btn-group-mins">
                    <a className="btn jr-btn-xs btn-primary" href="javascript:void(0)"><i
                        className="zmdi zmdi-thumb-up mr-1"/> Share</a>
                    <a className="btn jr-btn-xs btn-info" href="javascript:void(0)"><i
                        className="zmdi zmdi-share mr-1"/> Like</a>
                </div>
                }
            </div>
            <span className="icon-btn size-30"><i className="zmdi zmdi-chevron-right"/></span>
        </div>
    );
};

export default YourDailyFeedCell;
