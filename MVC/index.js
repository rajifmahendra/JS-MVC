// proses argv : bisa mengambil input dari terminal
// command : show, add, delete, update

const command = process.argv[2];
// mengambil array sisa nya
const params = process.argv.slice(3);
// console.log(command)
// console.log(params)

switch(command){
    case 'show':
        console.log("Command show");
        break;
    case 'add':
        console.log("Command Add");
        break;
    case 'delete':
        console.log("Command Delete");
        break;
    case 'update':
        console.log("Command Update");
        break;
    default:
        console.log("Masukkan command yang benar!!!")
        break
}