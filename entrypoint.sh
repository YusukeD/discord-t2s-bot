#!/bin/bash
set -e

if [ "$ENV" == "development" ]; then
  exec node_modules/.bin/node-dev app.js
else
  exec node app.js
fi
