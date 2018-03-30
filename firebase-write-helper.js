
/*
      Exposes a function that takes a "twitterValues" object and saves it to firebase.

      param { likes: @Integer,
              followers: @Integer,
              following: @Integer
            }
 */

module.exports = function (twitterValues) {

    return new Promise((resolve, reject) => {

        console.log('Initializing firebase!');

        const admin = require('firebase-admin');

        const serviceAccount = './key.json';
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://nightmare-firebase-web-scraper.firebaseio.com'
        });


        const db = admin.database();
        const ref = db.ref('save-by-date-test/');

        ref.once('value', (val) => {
            // console.log('once value at ' + JSON.stringify(val));
        });

        ref.on('value', (val) => {
            // console.log('value at fff/saving-data/fireblog has been updated' + JSON.stringify(val));
        });

        let dateString = (new Date()).getTime();
        ref.update({
            [dateString]: {
                "likes": twitterValues.likes,
                "followers": twitterValues.followers,
                "following": twitterValues.following
            },
        }).then((done) => {
            console.log('done! ', done)

            resolve(done);
        });

    });
};
