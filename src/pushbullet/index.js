'use strict'
const { promisify }  = require ('../util')
const pushbullet = require('./pushbullet')
var geoCalc = require('geo-calculator');

module.exports = function (config, locationConfig) {
  const { token, channel } = config
  const target = { channel_tag: channel }
  const pb = pushbullet(token);
  const createNote = pb.note.bind(pb)

  const notify = (pokemon) => {
    const yourLocation = [locationConfig.latitude, locationConfig.longitude];
    const pokemonLocation = [pokemon.latitude, pokemon.longitude];
    const distanceMeters = geoCalc.distance(yourLocation, pokemonLocation);
    const distanceFeet = parseInt(distanceMeters * 3.2808399);

    const title = `A ${pokemon.name} is nearby!`
    const body =
      `It's only ${distanceFeet} feet away! Go here to catch it: \n
       ${pokemon.directions}\n\n
       Better Hurry! It'll be gone ${pokemon.expiresString}`
    return promisify(createNote)(target, title, body)
      .then(() => `Sent Notification for ${pokemon.name} ${pokemon.encounter_id}`)
  }

  return { notify }
}
