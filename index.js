const cron = require('node-cron')
const Tracker = require('./src/main')

const CRON_ONCE_PER_MINUTE = '0 * * * * *';

const homeConfig = require('/Users/arlux/.pokecron-go/home.config')
const tracker = new Tracker(homeConfig)
task = cron.schedule(CRON_ONCE_PER_MINUTE, tracker, false)
task.start()
