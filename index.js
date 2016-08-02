const cron = require('node-cron')
const Tracker = require('./src/main')

const CRON_ONCE_PER_MINUTE = '0 * * * * *';

function startTracker(config) {
  console.info(`Starting to track Pokémon at ${config.name}`);
  const homeConfig = require(config.configFile);
  const tracker = new Tracker(homeConfig);
  const task = cron.schedule(config.cronExpression, tracker, false);
  task.start();
}

const trackers = [{
  name: "home",
  configFile: '/Users/arlux/.pokecron-go/home.config',
  cronExpression: CRON_ONCE_PER_MINUTE
}];

trackers.forEach(tracker => {
  startTracker(tracker);
});