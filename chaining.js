const countFive = require('./functions');
const DataService = require('./services');

const dataService = new DataService();

// Result returned from a promise resolver (function passed to 'then' call)
// bubbles down to the next resolver allowing us to chain multiple promises
// while receiving the final result from the last promise's resolver.
countFive(3)
    .then(count => dataService.load(count))
    .then(result => console.log(result));
