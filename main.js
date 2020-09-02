#!/usr/bin/env node
const process = require('process');
let interval = 1000;

if(typeof process.argv[2] == "string") interval = parseInt(process.argv[2]);

function info(sig) {
    console.log(`Got ${sig}`);
    process.exit(1);
}
process.on('SIGINT', info);
process.on('SIGTSTP', info);
process.on('SIGBREAK', info);
process.on('SIGQUIT', info);

console.log(`Dummy Node Service - Started on ${new Date()}`)
console.log(`Will tick every ${interval/1000} seconds (${interval}ms), Customize with argument (${process.argv[1]} [ms])`)

setInterval(() => {
    console.log("Tick!");
}, interval);