module.exports = class DataService {
    constructor() {
        this.failCount = 0;

        this.load = this.load.bind(this);
        this.loadOrFail = this.loadOrFail.bind(this);
    }

    load(index) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(`Loaded ${index}`);
            }, 100);
        });
    }

    loadOrFail(index) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.failCount++;

                if (this.failCount > 3) {
                    return resolve(`Loaded ${index}`);
                }

                reject('Error...');
            }, 100);
        });
    }
};
