const DataService = require('./services');

// We can retry an action by chaining a retrier
// function that executes the same action to
// the action's promise 'catch' function.
function retry(action, times, ...arguments) {
    let count = 0;

    const retrier = (...args) => {
        return action(...args)
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

retry(dataService.loadOrFail, 3, 7)
    .then(result => console.log(result))
    .catch(e => console.error(e));
