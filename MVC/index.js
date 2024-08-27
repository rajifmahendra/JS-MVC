// proses argv : bisa mengambil input dari terminal
// command : show, add, delete, update

const command = process.argv[2];
// mengambil array sisa nya
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController')

switch(command){
    case 'show':
        // console.log("Command show");
        // const fs = require('fs')
        // let data = fs.readFileSync('./data.json','utf8');
        // let todos = JSON.parse(data);
        // console.log(todos);
        //console.log(TodoController)
        TodoController.show();
        break;
    case 'add':
        // console.log("Command Add");
        TodoController.add(params);
        break;
    case 'delete':
        //console.log("Command Delete");
        TodoController.delete(params);
        break;
    case 'update':
        // console.log("Command Update");
        TodoController.update(params);
        break;
    default:
        //console.log("Masukkan command yang benar!!!")
        TodoController.message("Masukkan Command Yang Bener!!!");
        break;
}