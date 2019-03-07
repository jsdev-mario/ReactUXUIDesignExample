import React from 'react';
import ProjectsCell from './ProjectsCell';


const ProjectsList = ({data}) => {
    return (
        <div>
            {data.map(data => {
                return (
                    <ProjectsCell key={data.id} data={data}/>
                );
            })}
        </div>
    );

};

export default ProjectsList;