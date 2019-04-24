const DataService = require('./services');

// We can delay resolution of a promise by chaining
// the resolver that returns a new promise that
// resolves after a specified timeout.
function delay(promise, time) {
    return promise.then(result => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), time);
        });
    });
}

const dataService = new DataService();

delay(dataService.load(7), 2000)
    .then(result => console.log(result));
