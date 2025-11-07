
const nav = document.querySelector("#nav")


let projects = []
let activeProject ;







export function projectRemover(element){ 
    for(let i = 0 ; i<projects.length ; i++){ 
        if (projects[i].id == element.id){ 
            projects.splice(i , 1)
        }

    }
    
}

function getActiveProject(){ 
    return activeProject
}

function setActiveProject(project){
    activeProject = project

}

function getProjectsArr(){  
    return projects
}

function addToProjectsArr(newProject){ 
    projects.push(newProject)

}

export {projects}
export {setActiveProject}
export {getActiveProject}
export {getProjectsArr}
export {addToProjectsArr}

