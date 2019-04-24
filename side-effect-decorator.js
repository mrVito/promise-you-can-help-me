const DataService = require('./services');

class WithLogging {
    constructor(dataService) {
        this.dataService = dataService;
    }

    load(index) {
        return this.dataService.load(index)
            .then(this.log);
    }

    log(data) {
        console.log('Log:', data);

        return data;
    }
}

const dataService = new DataService();
const loggingDataService = new WithLogging(dataService);

loggingDataService
    .load(7)
    .then(result => console.log('Final result:', result));
