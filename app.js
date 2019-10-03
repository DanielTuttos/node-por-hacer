












//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear nota');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);

        }
        break;

    case 'actualizar':
        //console.log('actualiza una tarea');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('el comando no es reconocido');
}