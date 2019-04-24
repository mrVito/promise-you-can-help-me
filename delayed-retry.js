const DataService = require('./services');

// We can delay a rejection of a promise the same
// way we can delay a resolution of it simply
// by chaining 'catch' instead of 'then'.
function delayCatch(promise, time) {
    return promise.catch(error => {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(error), time);
        });
    });
}

// We can retry an action by chaining a retrier
// function that executes the same action to
// the action's promise 'catch' function.
function retry(action, times, delay, ...arguments) {
    let count = 0;

    const retrier = (...args) => {
        // We wrap the action call into delay function to throttle retries.
        return delayCatch(action(...args), delay)
            .catch(e => {
                count++;

                if (count >= times) {
                    throw e;
                }

                return retrier(...args);
            });
    };

    return retrier(...arguments);
}

const dataService = new DataService();

retry(dataService.loadOrFail, 5, 2000, 7)
    .then(result => console.log(result))
    .catch(e => console.error(e));
