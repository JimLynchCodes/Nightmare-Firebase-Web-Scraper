const Nightmare = require('nightmare')
const firebase = require('firebase')
const nightmare = Nightmare({ show: true })
const admin = require('firebase-admin');

nightmare
    .goto('https://duckduckgo.com')
    .type('#search_form_input_homepage', 'github nightmare')
    .click('#search_button_homepage')
    .wait('#r1-0 a.result__a')

    .evaluate(() => {
//         //
//
//         return new Promise(() => {
//         // var config = {
//         //     apiKey: "AIzaSyDHqcAGVNXXeGdofMv3CTLbDNCEBax_Cow",
//         //     authDomain: "nightmare-firebase-web-scraper.firebaseapp.com",
//         //     databaseURL: "https://nightmare-firebase-web-scraper.firebaseio.com",
//         //     projectId: "nightmare-firebase-web-scraper",
//         //     storageBucket: "",
//         //     messagingSenderId: "131385159728"
//         // };
//         // firebase.initializeApp(config);
//
//         var serviceAccount = require('key.json');
//
//
//         admin.initializeApp({
//             credential: admin.credential.cert(serviceAccount),
//             databaseURL: 'https://nightmare-firebase-web-scraper.firebaseio.com'
//         });
//
// // Get a database reference to our blog
//         const db = admin.database();
//
// // creating a starting path in our database
//         const ref = db.ref('server/saving-data/fireblog');
//
// // create a child node of the above path and write the following data to it
//         const usersRef = ref.child('users');
//         usersRef.set({
//             alanisawesome: {
//                 date_of_birth: 'June 23, 1912',
//                 full_name: 'Alan Turing',
//             },
//             gracehop: {
//                 date_of_birth: 'December 9, 1906',
//                 full_name: 'Grace Hopper',
//             },
//         });
//
// // update the above data with nicknames
//         usersRef.update({
//             'alanisawesome/nickname': 'Alan The Machine',
//             'gracehop/nickname': 'Amazing Grace',
//         }).then((done) => {
//             console.log('done! ' + done)
//             resolve(done);
//         });
//
//
//
//     })
//
        console.log(5);
        5
    })
    // .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
    .end()
    .then(done => console.log("done", done))
    .catch(error => {
        console.error('Search failed:', error)
    })
