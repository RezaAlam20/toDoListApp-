
import { project } from "./project"



const nav = document.querySelector("#nav")


let projects = []
let activeProject = projects[-1]







export function projectAdder(){ 
    const form = document.createElement("form")
    form.addEventListener("submit" , (e)=>{  
        e.preventDefault()
        let value = form.querySelector("#name").value
        let newProject = new project(value)
        projects.push(newProject)
        console.log(projects)
        
    })
    form.innerHTML = `<label for="name">project name:</label>
                        <input type="text" id="name" name="name">
                    <button type="submit">create</button>`
    nav.appendChild(form)



}



export {projects}
export {activeProject}







