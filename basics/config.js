function getConfig(args) {
    if (args.length === 4) {
        return {hostname: args[2], port: args[3]}
    }
    else {
        console.log('Using defaults');
        return {hostname: 'localhost', port: 8000};
    }
}

module.exports = getConfig;