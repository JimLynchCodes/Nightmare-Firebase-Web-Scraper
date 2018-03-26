// Type the title number into the appropriate box; click submit

const Nightmare = require('nightmare')
const firebase = require('firebase')
const nightmare = Nightmare({ show: true })
const admin = require('firebase-admin');
const caller = require('./simple-firebase-write');

async function find (ctx) {

       // const derp = await nightmare
       //      // .print(console.log)
       //      .goto('https://duckduckgo.com')
       //      .type('#search_form_input_homepage', 'github nightmare')
       //      .click('#search_button_homepage')
       //      .evaluate( () => {
       //          console.log('HOLLA')
       //
       //          return {"name": "egg-cenlent"}
       //      })
       //     // .end()
       //      .then((ok) => {
       //          console.log('then' + ok)
       //          console.log('then name' + ok.name)
       //      })

    // <input type="password" class="StaticLoggedOutHomePage-input text-input" name="user[user_password]" >

        const derp2 = await nightmare
        // .print(console.log)
        //     .click(btn)
            .on('console', (log, msg) => {
                console.log(msg)
            })
            .goto('https://twitter.com/login')


            // .wait(8000)
            // click('a[href="/login"]')
            // .click('input[placeholder="Phone or email"]')
            // .click('input[placeholder="Password"]')
            // .wait(3000)
            .type('input[placeholder="Phone, email, or username"]', '@sdfsdfsd')

            // .click('input[placeholder*="Password"]')
            // .type('input[name="user[user_password]"]')
            .type('input.js-password-field', 'sdfsdfsdf')


            .click('button[type="submit"]')
            // .type('input.js-password-field', '\n')
            // .type('input.input-text')




            .wait('span.ProfileCardStats-statLabel')
            // .type('[type="password"]', 'github nightmare')
        //     .click('#search_button_homepage')

            // .wait(5000)
            // .end()
            // .end()

            .evaluate( () => {
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

                return new Promise( (resolve, reject) => {
                    caller(twitterValues).then( () => {
                        console.log('caller called')
                            resolve("ok");
                        });
                })

            })


        const derp3 = await nightmare
            .evaluate( () => {


                // console.log('hey');


                function test2(){
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