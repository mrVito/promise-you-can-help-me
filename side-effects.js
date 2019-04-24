const DataService = require('./services');

// We must return the same data we have received so
// we don't modify the final value that we resolve
// from a promise after the side effect.
function log(data) {
    console.log('Log:', data);

    return data;
}

function notify(data) {
    console.log('Notification:', data);

    return data;
}

const dataService = new DataService();

dataService.load(7)
    .then(log)
    .then(notify)
    .then(result => console.log('Final result:', result));
