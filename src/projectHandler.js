
const nav = document.querySelector("#nav")



let projects = []
export function projectHandler(){ 
    const form = document.createElement("form")
    form.addEventListener("submit" , (e)=>{  
        e.preventDefault()
        let value = form.querySelector("#name").value
        let newProject = new project(value)
        projects.push(newProject)
        
    })
    form.innerHTML = `<label for="name">project name:</label>
                        <input type="text" id="name" name="name">
                    <button type="submit">create</button>`
    nav.appendChild(form)

}



class project{ 
    constructor(name){
        this.name = name
    }

    createTask(){ 
        
    }

    deleteTask(){  
        
    }



}










export {projects}







