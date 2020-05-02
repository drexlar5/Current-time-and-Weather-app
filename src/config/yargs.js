const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'City Address to get the current time and weather',
            demand: true
        }
    })
    .help()
    .version()
    .argv;

module.exports = {
    argv
}