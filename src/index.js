import styleSheet from "./style.css"
import { renderProjects } from "./render"
import { projects } from "./store"
import { projectAdder } from "./store"
import { projectRemover } from "./store"




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
})



