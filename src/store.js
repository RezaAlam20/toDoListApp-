
import { project } from "./project"



const nav = document.querySelector("#nav")


let projects = []
let activeProject = projects[-1]



const form = document.createElement("form")


function projectForm(){  
        form.innerHTML = `<label for="name">project name:</label>
                        <input type="text" id="name" name="name">
                    <button type="submit">create</button>`
         nav.appendChild(form)

}


export function projectAdder(){ 
    projectForm()

    form.addEventListener("submit" , (e)=>{  
        e.preventDefault()
        let value = form.querySelector("#name").value
        let newProject = new project(value)
        projects.push(newProject)

        
    })



}

export function projectRemover(element){ 
    for(let i = 0 ; i<projects.length ; i++){ 
        if (projects[i].id == element.id){ 
            projects.splice(i , 1)
        }

    }
    console.log(projects)
    
}


export {projects}
export {activeProject}







