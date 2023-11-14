import React from "react";

function Project(link, name) {
    return (
        <div>
            <h2>{name}</h2>
            <a href={link}>Project Github</a>
        </div>
    );
};

export default Project;