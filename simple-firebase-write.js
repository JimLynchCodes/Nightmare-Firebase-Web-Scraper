const writeTwitterValues = require('./firebase-write-helper');

writeTwitterValues({ "likes": 42, "followers": 42, "following": 42 }).then( ()=> {
    process.exit(0);
});