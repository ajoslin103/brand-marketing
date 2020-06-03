#!/bin/bash
#
# ajoslin: june 2020 -- use this script to serve the dist folder locally using docker
#
docker run -dit -p 8080:80 -v $(dirname $0)/dist/:/usr/local/apache2/htdocs/ httpd:2.4
if [ $? -eq 0 ] ; then
  echo " "
  echo " this project should now be available at http://localhost:8080 "
  echo " "
else
  echo " "
  echo " note: to use this script you need to call it with an absolute path "
  echo " example: $(pwd)/$(basename $0) "
  echo " or : \$(pwd)/$(basename $0) "
  echo " "
fi

