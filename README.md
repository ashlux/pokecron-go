# PokeCron GO (node)

PokeCron is an example of pinging the pokemon go server, and notifying a service about updates.

## Environment
- This example composes several services together: AWS (DynomoDB), the Pokemon Go API, Pushbullet, and Google Walking directions, so there's a few environment variables. Look at sample.env for everything required.
- This project does use native c modules, which can make things annoying if bundling and deploying from Unix to Linux. (Like, say, for AWS Lambda)

## Running
It's pretty simple to get going.
`npm run start`

## Roadmap
 - Tests.
 - Convert task to Lambda Function (VM?)