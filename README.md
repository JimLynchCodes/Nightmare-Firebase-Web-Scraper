# Jim's "All 3" Nightmare Firebase Twitter WebScraper

Template for easy browser automation on ci and lambda.


Jim's is (as are many other web ui automation experts) very excited about [NightareJs](https://github.com/segmentio/nightmare).

I like to call it an "all 3" framework because you can easily run it:

- locally in your command shell.
- on a continutous integration platform.
- as a serverless function on aws lambda (and in theory any other serverless providers of current nodejs versions).

I don't know about you, but whenever I use selenium or similar technologies it is never easy to just switch over to headless mode, and many valiant efforts may result in missing drivers or "xvfb errors". 







A browser automation script with nightmare.js that navigates to a page and saves some information to a firebase database.



# Usage

## 1. Clone this repo
 
```
git clone https://github.com/JimTheMan/Nightmare-Firebase-Web-Scraper.git 
```


## 2. Npm Install
 
 Naviagte into the project root and run:
```
npm i
```


## 3. Set npm Version
 
 Since we are using fancy async await syntax this code won't run on early version of node.
 
 I recommend using at least node version 7.6.0, and I recommend using [nvm](https://github.com/creationix/nvm) to easily switch node versions.
 
```
nvm i 7.6
nvm use 7.6
```

## 4. Get Firebase Keyfile

You will need to have a file in the project root named "key.json". You can get this file from the [firebase console](https://console.firebase.google.com) by going to 
_settings cog_ -> _Users & Permissions_ -> _Service Accounts_ -> _Create Service Account_


## 5. Create Twitter Credentials File
Create a file named `.creds.js` containing this:


```
module.exports = {
    username: '*******',
    password: '*******'
}
```

This credentials file is used in the nightmare script in order to log into the twitter account and scrape information.


## Run Simple Firebase Write Script

```
node simple-firebase-write.js
```

This script writes some hardcoded values to your firebase database for likes, followers, and following.

After scraping, your database should look something like this:

```

{ 'save-by-date-test': 
    1522039332446: { followers: "1,904",
                     following: "1,826",
                     likes:     "652"
                   },
    1522378183186: { followers: "42",
                     following: "42",
                     likes:     "42"
                   }
                   .
                   .
                   .
}
```

Since we are using the firebase NoSql object-style database, I just have a root database node named 'save-by-date-test'.

The children on this object are created from JavaScript's `date.getTime()`. This is great because you can take these database keys and feed it into a new Date function JavaScript to get that exact point in time, down to the second, that the scraping went down.
 
As so we essentially have a method for create time-series data. We can then do all sorts of cool stuff with the data like building charts and graphs, doing time-series analysis, and applying machine learning. 


## Run Nightmare Twitter Scraper

```
node nightmare-firebase-twitter-scraper.js
```





## Use It

You should use this scraper and make a similar one that scrapes what you want (feel free to open issues and ask questions!).

It's a scraper that can scrape as often as you like and can scrape virtually any website, desktop or mobile.

*Of course it's easier if the site has nice, consistent css classes throughout, but in theory if you can do it manually in the browser you can do it with nightmare.

Also, nightmare is not dependent on selenium or xvfd so it's easy-ish to run on ci platforms and AWS lambda. (demo project coming soon) ;)

