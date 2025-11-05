import styleSheet from "./style.css"
import { makeProjectsDivs } from "./render"
import { projects } from "./store"
import { projectAdder } from "./store"



projectAdder()




const form = document.querySelector("form")
form.addEventListener("submit" , ()=>  { 
    makeProjectsDivs(projects)
})







