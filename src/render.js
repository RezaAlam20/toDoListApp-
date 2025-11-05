import { project } from "./project";
import { projects } from "./store";


const container = document.querySelector("#container")









export function renderProjects(projects){
    while(container.firstElementChild){ 
        container.removeChild(container.firstElementChild)
    }
    projects.forEach(project => {
        const div = document.createElement("div")
        div.id = project.id
        container.appendChild(div)
        const name = document.createElement("p")
        name.textContent = project.name
        div.appendChild(name)
        removeProjectDiv(div)
        editProject(div)


        
        
    });





}

function removeProjectDiv(div){  
    const removeBtn = document.createElement("div")
    removeBtn.classList.add("removeBtn")
    div.appendChild(removeBtn)

}

function editProject(div){ 
    const editProject = document.createElement("div")
    editProject.classList.add("editProject")
    div.appendChild(editProject)


}

function displayProjects(){ 


}





