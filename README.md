# ghibli

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
