import React from 'react';
import {Project} from "./components/Project/Project";
import {PROJECTS} from "./data/projects";
import './App.scss'

export function App() {
    return (
        <div className="projects">
            {PROJECTS.map(project => <Project project={project} key={project.id}/>)}
        </div>
    );
}

