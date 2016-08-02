const cron = require('node-cron')
const Tracker = require('./src/main')

// ┌────────────── second (optional)
// │ ┌──────────── minute
// │ │ ┌────────── hour
// │ │ │ ┌──────── day of month
// │ │ │ │ ┌────── month
// │ │ │ │ │ ┌──── day of week
// │ │ │ │ │ │
// │ │ │ │ │ │
// * * * * * *

const CRON_ONCE_PER_MINUTE = '0 * * * * *';

function startTracker(trackerConfig) {
  console.info(`Starting to track Pokémon at ${trackerConfig.name}`);
  const config = require(trackerConfig.configFile);
  const tracker = new Tracker(config);
  const task = cron.schedule(trackerConfig.cronExpression, tracker, false);
  task.start();
}

const trackers = [
  {
    name: "home",
    configFile: '/Users/arlux/.pokecron-go/home.config',
    // Run every minute everyday between Midnight-2 AM and 9 PM - Midnight
    cronExpression: '0 * 0,1,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * *'
  /*},
  {
    name: "philtower",
    configFile: '/Users/arlux/.pokecron-go/philtower.config',
    // Run every minute M-F between 8-6
    cronExpression: '0 * 9,10,11,12,13,14,15,16,17 * * 1-5' */
  }
];

trackers.forEach(tracker => {
  startTracker(tracker);
});