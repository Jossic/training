

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');



program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({ filename }) => {
        const name = filename || 'index.js';

        try {
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`Could not fint the file ${name}`);
        }

        const start = debounce(() => {
            console.log("STARTING USERS PROGRAM");
        }, 100);

        chokidar.watch('.')
            .on('add', start)
            .on('change', () => console.log('FILE CHANGED'))
            .on('unlink', () => console.log('FILE UNLINKED'));

    });



