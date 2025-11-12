
const content = document.querySelector("#container")









export function renderProjects(projects){
    while(content.firstElementChild){ 
        content.removeChild(content.firstElementChild)
    }
    projects.forEach(project => {
        const div = document.createElement("div")
        div.id = project.id
        div.classList.add("project")
        content.appendChild(div)
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
        const title = document.createElement("h1")
        title.textContent = `${activeProject.tasks[i].name}`
        const priority = document.createElement("p")
        priority.textContent = `${activeProject.tasks[i].priority}`
        task.appendChild(title)
        task.appendChild(priority)
        const taskObj = activeProject.tasks[i]
        const doneBtn = taskDoneBtn(task , taskObj)
        task.appendChild(doneBtn)
        const dueDate = renderDueDate(taskObj)
        task.appendChild(dueDate)
        const dueBadge = dueBadgeMaker(taskObj)
        task.appendChild(dueBadge)


        

    }



}


function createTaskBtn(div){  
    const createTask = document.createElement("div")
    createTask.classList.add("createTask")
    div.appendChild(createTask)
    


}


function taskForm() { 
    const content = document.querySelector("#content")
    while(content.firstElementChild){ 
        content.removeChild(content.firstElementChild)
    }
    
    const form = document.createElement("form")
    form.classList.add("taskForm")
    form.innerHTML = `        <div>
            <label for="taskname">Task name</label>
            <input type="text" id="taskname" name="taskname" required>
        </div>
        <div>
            <label for="priority">priority</label>
            <select name="priority" id="priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
        </div>
        <div> <input type="date" id="dueDate" required>
        </div>
        <button type="submit">create Task</button>`
    content.appendChild(form)

    




}




function taskDoneBtn(task , taskObj) { 
    const doneBtn = document.createElement("input")
    doneBtn.type = "checkbox"
    doneBtn.checked = task.done
    doneBtn.addEventListener("change"  , ()=> {  
        taskObj.taskDone()
        console.log(taskObj.done)
    })
    return doneBtn
    
    
    
}

function renderDueDate(taskObj){  
    const div = document.createElement("div")
    div.classList.add("dueDate")
    const dueDate = taskObj.dueDate
    div.textContent = dueDate
    return div
}
function dueBadgeMaker(task){ 
    const div = document.createElement("div")
    div.classList.add("dueBadge")
    div.textContent = task.dueStatus
    return div

}

export {taskForm}
export {renderTasks}



