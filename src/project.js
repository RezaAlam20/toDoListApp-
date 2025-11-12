import { getUnixTime } from "date-fns";
import { startOfDay } from "date-fns";

class project{ 
    constructor(name){
        this.name = name
        this.id = crypto.randomUUID()
        this.tasks = []

    }

    createTask(name , priority , dueDate){
        const task = new Task(name , priority ,dueDate)
        this.tasks.push(task)
        return task
        

    }

    deleteTask(id){ 
        this.tasks.forEach(task => {
            if (task.id == id){ 
                this.tasks.splice(task , 1)

            }
            
        }); 
        
        
    }
    editTask(){ 

    }




}

class Task { 
    constructor(name , priority , dueDate , done=false , dueStatus ){  
        this.name = name 
        this.priority = priority
        this.done = done 
        this.id = crypto.randomUUID()
        this.dueDate = dueDate
        this.dueStatus = dueStatus 
    }
    taskDone() { 
        this.done =  !this.done
    }
    checkDue() {
    const now = getUnixTime(startOfDay(new Date()))
    const unix = getUnixTime(startOfDay(this.dueDate))
    if (unix == now ){ 
        this.dueStatus = "due-today"
    }
    else if (unix > now){ 
        this.dueStatus = "upcoming"
    }
    else if (unix < now){ 
        this.dueStatus = "over-due"
    }


}






}



export {project} ;



