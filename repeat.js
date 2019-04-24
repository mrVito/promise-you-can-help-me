const countFive = require('./functions');

// We can repeat an action by chaining a repeater
// function that executes the same action
// to the action's promise resolver.
function repeat(action, times, argument) {
    let count = 0;

    const repeater = (arg) => {
        if (count >= times) {
            return arg;
        }

        count++;

        return action(arg).then(repeater);
    };

    return repeater(argument);
}

repeat(countFive, 3)
    .then(count => console.log(`Counted to ${count}`));
