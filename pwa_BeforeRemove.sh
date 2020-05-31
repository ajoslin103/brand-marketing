#!/bin/bash

rpmName="BrandMarketing"

# check the argument we were given to determine what to do
# reference: https://www.ibm.com/developerworks/library/l-rpm2/
# 0:uninstall, 1:install, 2:upgrade

runStyle="$1"
echo "${rpmName}.pwa_BeforeRemove ${runStyle}"

# only run on un-install
if [ "${1:-0}" -gt 0 ]; then
	exit 0
fi

# confirm the client name file
client=$(cat /var/www/html/enrollment-client.txt)
if [ -z "${client}" ] ; then
  echo "installation should have written a client abbrv to /var/www/html/enrollment-client.txt, not found"
else
  client=$(cat /tmp/enrollment-client.txt)
  if [ -z "${client}" ] ; then
    echo "we need to copy it to /tmp/enrollment-client.txt, for the afterRemove cleanup script"
  else
    # copy it to /tmp for the afterRemove script
    cp -f /var/www/html/enrollment-client.txt /tmp/.
  fi
fi

# pss is managing httpd now
# ensure that httpd is disabled and stopped
# systemctl disable httpd &> /dev/null
# systemctl stop httpd &> /dev/null
# # close the firewall for httpd & s
# firewall-cmd  --remove-service http &> /dev/null
# firewall-cmd  --remove-service https &> /dev/null
# firewall-cmd  --permanent --remove-service http &> /dev/null
# firewall-cmd  --permanent --remove-service https &> /dev/null

exit 0

# finished
