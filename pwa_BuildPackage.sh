#!/bin/bash

arch="noarch"
rpmName="BrandMarketing"
description="A programming exercise"
gpg_name="Allen Joslin <allen.joslin@gmail.com>"

# thisFolder=/goes/there/ andThisOne=/goes/here
# trailing slash on source moves contents
rpmDirs=$(cat <<EOF
./dist/=/var/www/html/
EOF
)

# there are single files -> the client param in particular!
rpmFiles=$(cat <<EOF
./gitVersion.txt=/var/www/html/version.txt
EOF
)

# ensure a place to put the rpm
mkdir -p rpms

# get the version of the rpm
./pwa_GetGitRevision.sh > gitVersion
cp  gitVersion gitVersion.txt

# declare our intentions
echo "Building rpm: ${rpmName}-$(cat gitVersion)"

# clean any os x files from the distribution folder
find dist -type f -name .DS_Store -print | xargs rm -f

# build the rpm
fpm -t rpm -p rpms/ -n ${rpmName} -a ${arch} --rpm-os linux -v $(cat gitVersion) --description "${description}" --after-install pwa_AfterInstall.sh --after-upgrade pwa_AfterInstall.sh --before-upgrade pwa_BeforeRemove.sh --before-remove pwa_BeforeRemove.sh --after-remove pwa_AfterRemove.sh -s dir ${rpmDirs} ${rpmFiles}

# if build success then sign
[[ $? -eq 0 ]] && rpm --define="_gpg_name ${gpg_name}" --addsign  rpms/${rpmName}-$(cat gitVersion)-1.${arch}.rpm

#finished
