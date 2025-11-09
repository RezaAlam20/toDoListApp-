
const container = document.querySelector("#container")









export function renderProjects(projects){
    while(container.firstElementChild){ 
        container.removeChild(container.firstElementChild)
    }
    projects.forEach(project => {
        const div = document.createElement("div")
        div.id = project.id
        div.classList.add("project")
        container.appendChild(div)
        const name = document.createElement("p")
        name.textContent = project.name
        div.appendChild(name)
        removeProjectDiv(div)
        editProject(div)
        createTaskBtn(div)


        
        
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

function renderTasks(activeProject){ 
    const container = document.querySelector("#content")
    while(container.firstElementChild){ 
        container.removeChild(container.firstElementChild)
    }
    for(let i = 0 ; i < activeProject.tasks.length ; i++){  
        const task = document.createElement("div")
        container.appendChild(task)
        task.classList.add("task")
    }



}


function createTaskBtn(div){  
    const createTask = document.createElement("div")
    createTask.classList.add("createTask")
    div.appendChild(createTask)
    


}


function taskForm() { 
    const content = document.querySelector("#content")
    
    const form = document.createElement("form")
    form.classList.add("taskForm")
    form.innerHTML = `        <div>
            <label for="taskname" id="taskname">Task name</label>
            <input type="text" id="taskname" name="taskname">
        </div>
        <div>
            <label for="priority" id="priority">priority</label>
            <select name="priority" id="priority">
                <option value="1">low</option>
                <option value="2">medium</option>
                <option value="3">high</option>
            </select>
        </div>
        <button type="submit">create Task</button>`
    content.appendChild(form)

    




}





export {taskForm}
export {renderTasks}



