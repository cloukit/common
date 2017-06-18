#!/bin/bash

set -e

git clone https://github.com/cloukit/ng-library-build.git library-build-chain
cd library-build-chain
npm install
npm run build
