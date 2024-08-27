const fs = require('fs')

class Todo {
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status;
    }
    static getTodos(){
        let data = fs.readFileSync('./data.json','utf8');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const {id, task, status} = el;
            return new Todo(id, task, status);
        })
        return todos;
    }
    static show(){
        let todos = this.getTodos();
        return todos;
    }
}

module.exports = Todo