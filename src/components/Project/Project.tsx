import React from 'react';
import './Project.scss';
import {iProject} from "../../intefaces/iProject";
import {Button} from "../Button/Button";

interface ProjectParams {
    project: iProject
}
export function Project ({project}: ProjectParams) {
    return (
        <div className="item">
            <div className="image" style={{backgroundImage: `url(${project.image})`}}></div>
            <div className="info">
                <div className="title">{project.title}</div>
                <div className="short-description">{project.short_description}</div>
                <Button text="Read More"/>
            </div>
        </div>
    )
}