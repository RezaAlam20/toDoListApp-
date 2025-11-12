
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
        createTaskBtn(div)


        
        
    });





}

function removeProjectDiv(div){  
    const removeBtn = document.createElement("div")
    removeBtn.classList.add("removeBtn")
    removeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
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
    createTask.innerHTML =`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
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



