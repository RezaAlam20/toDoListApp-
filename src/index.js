import styleSheet from "./style.css"
import { renderProjects } from "./render"
import { projectRemover } from "./store"
import { renderTasks } from "./render"
import { project } from "./project"
import { setActiveProject } from "./store"
import { getActiveProject } from "./store"
import { getProjectsArr } from "./store"
import { addToProjectsArr } from "./store"
import { taskForm } from "./render"



const form = document.createElement("form")
const nav = document.querySelector("nav")
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
        addToProjectsArr(newProject)
        renderProjects(getProjectsArr())
        const lastIndex = getProjectsArr().length - 1
        setActiveProject(getProjectsArr()[lastIndex])
        renderTasks(getActiveProject())

        
    })



}
projectAdder()


const container = document.querySelector("#container")

container.addEventListener("click" , (e)=> { 
    if (e.target.className == "removeBtn"){ 
        projectRemover(e.target.parentElement)
        renderProjects(getProjectsArr())


    }
    else if(e.target.className =="createTask") {
        taskForm()
        createTaskEventListener()
    }
    else if (e.target.closest(".project")){
        const project = e.target.closest(".project") 
        const activeId = project.id
        for(let i = 0 ; i<getProjectsArr().length ; i++) { 
            if (getProjectsArr()[i].id == activeId){  
                const curproject = getProjectsArr()[i]
                setActiveProject(curproject)
                renderTasks(getActiveProject())
            }
        }
    }

})



function createTaskEventListener(){
    const taskForm = document.querySelector(".taskForm")
    taskForm.addEventListener("submit"  , (e)=> { 
        e.preventDefault()
        const curproject = getActiveProject()
        const name = taskForm.querySelector("#taskname")
        const priority = taskForm.querySelector("#priority");
        curproject.createTask(name , priority)
        renderTasks(curproject)

    })


    



}


const defaultP = new project("default")
defaultP.createTask("test" , "high")
addToProjectsArr(defaultP)












