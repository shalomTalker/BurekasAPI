module.exports = {
    write: (int) => {
        const DB = 'burekasDB.json';
        fs.readFile(DB, function read(err) {
            if (err) {
                fs.writeFile(DB, [], function read(err) {
                    if (err) {
                        throw err;
                    }
                    cl('json not found so json file created and initialized with empty array');
                });
            } else {
                fs.writeFile(DB, logentry(str), function read(err) {
                    if (err) {
                        throw err;
                    }
                    cl('json DB updated!');
                });
            }
        });
    },
    logentry: (str) => {
        return str;
    }
};