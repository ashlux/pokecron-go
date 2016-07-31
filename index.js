const cron = require('node-cron')
const Tracker = require('./src/main')

const homeConfig = require('/Users/arlux/.pokecron-go/home.config')
const tracker = new Tracker(homeConfig)
task = cron.schedule('0 * * * * *',tracker, false)
task.start()
