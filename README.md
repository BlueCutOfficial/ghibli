# ghibli

## Features

### Display 

* Display a navbar to access all main routes : films / locations / characters / vehicles
* Display the list of all movies, with their title, short description, poster, and the "seen" feedback.
* Display a film's detail with all the info provided by the API, its poster, the list of all characters, locations and vehicles that appear in this film.
* Display the list of all characters
* Display a character's detail with all the info provided by the API, the list of the places he lives in and the list of all movies he appears in.
* Display the list of all locations
* Display a location's detail with all the info provided by the API, the list of all its residents and the list of all movies it appears in.
* Display the list of all vehicles
* Display a vehicle's detail with all the info provided by the API, its pilot and the movie it appears in.

### Actions 

* Go to the detail page of any item from the list of all items of this type
* Go to the detail page of any item from an associated detail page of another type
* Sort the list of all movies by Alphabetic order / Older first / Recent first / Best rating.
* From the film's detail page, mark the film as seen or unseen with a button on the right
* From the film's detail page, go back to the films list with a button at the bottom of the page

### Various

* Use the local storage to save seen feedback
* Implement a second API for posters
* Request posters one by one with generator function
* Write some tests

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

### Git / npm

* `git clone` this repository
* `cd ghibli`
* `npm install`
* `npm install phantomjs-prebuilt`

### API 

#### Info

* This project uses the [Studio Ghibli API](https://ghibliapi.herokuapp.com/) to display info about Ghibli movies.
* It uses the [Microsoft's Image Search API](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/571fab09dbe2d933e891028f) to display films posters.

#### apiKey

* You need an apiKey to resquest the posters. If you don't set up a key, a default poster will appear instead of the posters.
* Get an apiKey by subscribing to [Miscrosoft service](https://azure.microsoft.com/fr-fr/try/cognitive-services/) : thumb "Rechercher", then get the api key for "API Recherche Bing".

When you have got a key, put it in `app/config/environment.js`:

```
APP: {
  // Subscription key which provides access to Microsoft Cognitive Services API (Ocp-Apim-Subscription-Key)
  OASK: 'put-your-key-here'
}
```

## Running / Development

### Running app

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* Test your app at [http://localhost:4200/tests](http://localhost:4200/tests).
or
* `ember test`
* `ember test --server`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
