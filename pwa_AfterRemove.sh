#!/bin/bash

rpmName="BrandMarketing"

# check the argument we were given to determine what to do
# reference: https://www.ibm.com/developerworks/library/l-rpm2/
# 0:uninstall, 1:install, 2:upgrade

runStyle="$1"
echo "${rpmName}.pwa_AfterRemove ${runStyle}"

# only run on un-install
if [ "${1:-0}" -gt 0 ]; then
	exit 0
fi

# determine the client
client=$(cat /tmp/enrollment-client.txt)
if [ -z "${client}" ] ; then
  echo "installation should have created a client abbrv at: /var/www/html/enrollment-client.txt, which beforeRemove should have copied to: /tmp/enrollment-client.txt, but that was not found"
else
  # forcibly delete /var/www/html/enrollment-<client>/keypad/* files created after install
  rm -f /var/www/html/enrollment-${client}/keypad/* > /dev/null 2>&1

  # finish deleting /var/www/html/enrollment-<client> empty folders
  find /var/www/html/enrollment-${client}/ -depth -type d -print | xargs rmdir > /dev/null 2>&1
fi

# ensure deletion of the /var/html/banners symlink
rm -f /var/www/html/banners > /dev/null 2>&1

# ensure deletion of the /var/www/html/enrollment symlink
rm -f /var/www/html/enrollment > /dev/null 2>&1

exit 0

# finished
