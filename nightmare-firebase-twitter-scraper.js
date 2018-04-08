const Nightmare = require('nightmare');
const firebase = require('firebase');
const nightmare = Nightmare({show: true});
const admin = require('firebase-admin');
const firebaseWrite = require('./firebase-write-helper');
const creds = require('./.creds');

console.log('creds: ' + creds.username);


async function scrape(resolve, reject) {

    let findAndSave = nightmare;

    const ok = await findAndSave
        .on('console', (log, msg) => {
            console.log(msg)
        })
        .goto('https://twitter.com/login')
        .wait(3000)
        .wait('input[placeholder="Phone, email, or username"]')
        .type('input[placeholder="Phone, email, or username"]', creds.username)
        .type('input.js-password-field', creds.password)
        .click('button[type="submit"]')
        .wait(3000)
        // .wait('span.ProfileCardStats-statLabel')
        .evaluate(() => {
            const labels = document.getElementsByClassName('ProfileCardStats-statLabel');
            const values = document.getElementsByClassName('ProfileCardStats-statValue');
            return {
                "likes": values[0].textContent,
                "following": values[1].textContent,
                "followers": values[2].textContent
            }

        })
        .then((twitterValues) => {
            console.log("calling to firebase...");
            return new Promise((resolve, reject) => {
                firebaseWrite(twitterValues).then((ok) => {
                    console.log('firebase wrote! resolving');
                    resolve(ok);
                });
            }).then( (done)=> {
                console.log('now done really ' + done)
                resolve('ok')
            }).catch( (error)=> {
                console.log('error: ', error)
              reject(error);
            })

        })

    console.log('done.')
    process.exit(0)
}

module.exports = new Promise( (resolve, reject) => {
  return scrape(resolve, reject);
})



