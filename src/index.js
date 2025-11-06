import styleSheet from "./style.css"
import { renderProjects } from "./render"
import { projects } from "./store"
import { projectAdder } from "./store"
import { projectRemover } from "./store"
import { renderTasks } from "./render"
import { project } from "./project"

let activeProject ;
projectAdder()



const form = document.querySelector("form")
form.addEventListener("submit" , ()=>  { 
    renderProjects(projects)
})


const container = document.querySelector("#container")

container.addEventListener("click" , (e)=> { 
    if (e.target.className == "removeBtn"){ 
        projectRemover(e.target.parentElement)
        renderProjects(projects)


    }
    else if (e.target.className =="project"){ 
        const activeId = e.target.id 
        for(let i = 0 ; i<projects.length ; i++) { 
            if (projects[i].id == activeId){  
                activeProject = projects[i]
                console.log(activeProject)
            }
        }
    }
})




export {activeProject}















