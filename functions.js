module.exports = function countFive(startAt = 0) {
    return new Promise((resolve, reject) => {
        let count = startAt;

        const interval = setInterval(() => {
            if (count >= startAt + 5) {
                clearInterval(interval);

                return resolve(count);
            }

            console.log(++count);
        }, 100);
    });
};
