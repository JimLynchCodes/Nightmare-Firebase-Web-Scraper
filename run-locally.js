var gg = require('./nightmare-firebase-twitter-scraper')

console.log(typeof gg);
console.log(gg);
console.log(JSON.stringify(gg));

gg.then( () => {
  console.log('ok then...')
})

// gg.then( (ok) => {
  // console.log('all done!');
// })