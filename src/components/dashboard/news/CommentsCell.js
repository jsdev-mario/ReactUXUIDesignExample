import React from 'react';
import {Button} from 'reactstrap'


const CommentsCell = ({data}) => {
    const {id, name, desc, image} = data;
    return (
        <div className="media media-list">
            <img title="" alt="" className="rounded-circle avatar size-60 mr-3" src={image}/>
            <div className="media-body">
                <h5 className="mt-0">{name}</h5>
                <p className="card-text">{desc}</p>
                <div className="comment-footer">
                    <Button size="sm" color="primary" className="mr-4">APPROVE</Button>
                    <Button size="sm" color="secondary">DENY</Button>
                </div>
            </div>
            <span className="icon-btn">
                <i className="zmdi zmdi-close zmdi-hc-lg"/>
            </span>
        </div>
    );
};

export default CommentsCell;
