#!/bin/bash

rpmName="BrandMarketing"

# check the argument we were given to determine what to do
# reference: https://www.ibm.com/developerworks/library/l-rpm2/
# 0:uninstall, 1:install, 2:upgrade

runStyle="$1"
echo "${rpmName}.pwa_AfterInstall ${runStyle}"

# finished
