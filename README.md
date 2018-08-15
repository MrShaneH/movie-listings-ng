# Welcome to NotFlix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

### Installation
Run `npm install -g @angular/cli` locally to install the Angular CLI

Clone this repo, then run `ng serve` from the project directory for a dev server.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running application
The app uses [RXJS](https://angular.io/guide/rx-library) to implement a basic Store for managing the app state. 

State is available as an Observable that can be subscribed to, when the state changes, either from data loading from API or from user input, `movies.component.ts` will receive the new state.    

* On app init, the `app.component.ts > ngOnInit` method will request the store to load.
* The store will call the `themoviedb.service.ts > getCombined()` method which calls out to the 'TMDb Movies Now Playing' and 'TMDb Movie genres' API endpoints for data
* The responses are parsed and saved in the state service. Subscribers are notified that the state has been updated. 
* The user can interact with the filter component to send actions (`onRatingChange`, `onGenreChange`) to the store to alter the values in the state
 
### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
