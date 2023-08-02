const { resolve } = require("path");

require(`colors`);

const mostrarMenu = () => {

    return new Promise(resolve => {

    console.clear();
    console.log(`=================================`.green);
    console.log(`       Selcione una opcion   `.magenta);
    console.log(`=================================\n`.green);

    console.log(`${`1.`.green} Crear Tarea`)
    console.log(`${`2.`.green} Listar Tareas`)
    console.log(`${`3.`.green} Tareas Completadas`)
    console.log(`${`4.`.green} Tareas Pendientes`)
    console.log(`${`5.`.green} Marcar Tarea Completada`)
    console.log(`${`6.`.green} Borrar Tarea`)
    console.log(`${`0.`.green} Salir\n`)

    const readline = require(`readline`).createInterface ({
        input: process.stdin,
        output: process.stdout

    });

    readline.question(`Selcecione una opcion: `, (opt) => {
        readline.close();
        resolve(opt);
    })


    });

}

const pausa = () => {

    return new Promise(resolve => {

    const readline = require(`readline`).createInterface ({
        input: process.stdin,
        output: process.stdout
    
        });
    
    readline.question(`\nPresione ${ `ENTER`.blue } para continuar\n`, (opt) => {
        readline.close();
        resolve();
    })
    

    });

}

module.exports = {
    mostrarMenu,
    pausa
}