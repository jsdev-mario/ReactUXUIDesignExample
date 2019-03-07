import React from 'react';

const ProjectsCell = ({data}) => {
    const {id, name, date, status, color} = data;
    return (

        <div className="media project-list">
            <span className={`circle-shape bg-${color}`}></span>
            <div className="media-body">
                <a className="project-name" href="javascript:void(0)">{name}</a>
                <span className="meta-date">{date}</span>
            </div>
        </div>

    );
};

export default ProjectsCell;
