#!/bin/sh

export ALL_PROXY=$PROXY_PIA

export NVM_DIR=~/.nvm
. $(brew --prefix nvm)/nvm.sh
nvm use v6.3.1

npm start
