const Nightmare = require('nightmare');
const firebase = require('firebase');
const nightmare = Nightmare({show: true});
const admin = require('firebase-admin');
const caller = require('./firebase-write-helper');
const creds = require('./.creds');

console.log('creds: ' + creds.username);

async function find(ctx) {
    const derp2 = await nightmare
        .on('console', (log, msg) => {
            console.log(msg)
        })
        .goto('https://twitter.com/login')
        .type('input[placeholder="Phone, email, or username"]', '@sdfsdfsd')
        .type('input.js-password-field', 'sdfsdfsdf')
        .click('button[type="submit"]')
        .wait('span.ProfileCardStats-statLabel')
        .evaluate(() => {
            console.log('yo');

            const labels = document.getElementsByClassName('ProfileCardStats-statLabel');
            const values = document.getElementsByClassName('ProfileCardStats-statValue');

            console.log(values[0].textContent);
            console.log(values[1].textContent);
            console.log(values[2].textContent);

            console.log('labels ' + labels.length);
            console.log('values ' + values.length);


            return [values[0].textContent, values[1].textContent, values[2].textContent]

        })
        .then((twitterValues) => {

            console.log('twitterValues ', twitterValues)

            return new Promise((resolve, reject) => {
                caller(twitterValues).then(() => {
                    console.log('caller called')
                    resolve("ok");
                });
            })

        })


    const derp3 = await nightmare
        .evaluate(() => {


            // console.log('hey');


            function test2() {
                console.log("Hello Frofsdfaskl,hjkjdfm Test.");
                //
                // const labels = document.getElementsByClassName('span.ProfileCardStats-statLabel');
                // const values = document.getElementsByClassName('span.ProfileCardStats-statValue');
                //
                // console.log('labels ' + labels.length);
                // console.log('values ' + values.length);

            }

            test2()
        })

    // console.log('nightmare was ' + derp2);


    process.exit(0)
    console.log('done.')
}


find();