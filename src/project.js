class project{ 
    constructor(name){
        this.name = name
        this.id = crypto.randomUUID()
        this.tasks = []

    }

    createTask(name , priority){
        this.tasks.push(new Task(name , priority))
        

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
    constructor(name , priority , done=false ){  
        this.name = name 
        this.priority = priority
        this.done = done 
        this.id = crypto.randomUUID()
    }
    taskDone() { 
        this.done =  !this.done
    }




}



export {project} ;



