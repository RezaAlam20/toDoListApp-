import styleSheet from "./style.css"
import { renderProjects } from "./render"
import { projects } from "./store"
import { projectRemover } from "./store"
import { renderTasks } from "./render"
import { project } from "./project"
import { setActiveProject } from "./store"
import { getActiveProject } from "./store"



const form = document.createElement("form")

function projectForm(){  


        form.innerHTML = `<label for="name">project name:</label>
                        <input type="text" id="name" name="name">
                    <button type="submit">create</button>`
         nav.appendChild(form)

}



function projectAdder(){ 
    projectForm()

    form.addEventListener("submit" , (e)=>{  
        e.preventDefault()
        let value = form.querySelector("#name").value
        let newProject = new project(value)
        projects.push(newProject)
        renderProjects(projects)
        const lastIndex = projects.length - 1
        setActiveProject(projects[lastIndex])
        renderTasks(getActiveProject())

        
    })



}
projectAdder()


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
                const curproject = projects[i]
                setActiveProject(curproject)
                renderTasks(getActiveProject())
            }
        }
    }
})










