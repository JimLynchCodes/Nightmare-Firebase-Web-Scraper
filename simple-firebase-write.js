
module.exports = function (twitterValues) {

    return new Promise((resolve, reject) => {

    console.log('firebasing');

const admin = require('firebase-admin');

const serviceAccount = './key.json';
admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://nightmare-firebase-web-scraper.firebaseio.com'
        });

// Get a database reference to our blog
        const db = admin.database();

// creating a starting path in our database
        const ref = db.ref('save-by-date-test/');

        ref.once('value', (val) => {
            // console.log('once value at ' + JSON.stringify(val));
        });

        ref.on('value', (val) => {
            // console.log('value at fff/saving-data/fireblog has been updated' + JSON.stringify(val));
        });

// create a child node of the above path and write the following data to it
//         const usersRef = ref.child('users');
//         usersRef.set({
//             alanisawesome: {
//                 date_of_birth: 'June 23, 19127',
//                 full_name: 'Alan Turing  + Math.floor(Math.random() * 100)',
//             },
//             gracehop: {
//                 date_of_birth: 'December 9, 1906',
//                 full_name: 'Grace Hopper',
//             },
//         }).then( set=> {
//             console.log('setted ', set)
//         });

// update the above data with nicknames

         let dateString = (new Date()).getTime();
        ref.update({
            [dateString]: {"likes": twitterValues[0],
            "followers": twitterValues[1],
            "following": twitterValues[2]},
        }).then((done) => {
            console.log('done! ', done)

            resolve(done);
        });

    });
};
