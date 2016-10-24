#!/bin/bash

set -eo pipefail
echo "--- Set Node Version"
. "$NVM_DIR/nvm.sh"
nvm use 4
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp deploy | tee -a bk-pipeline.log
buildkite-agent artifact upload "zip/*.zip"
gulp prepare-deployment | tee -a bk-pipeline.log
expect ./.buildkite/stagingDeploy.sh | tee -a bk-pipeline.log