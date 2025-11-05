

const container = document.querySelector("#container")


export function makeProjectsDivs(projects){
    while(container.firstElementChild){ 
        container.removeChild(container.firstElementChild)
    }
    projects.forEach(project => {
        const div = document.createElement("div")
        container.appendChild(div)

        
        
    });





}

function makeTaskDivs(){ 


}

function displayProjects(){ 


}





