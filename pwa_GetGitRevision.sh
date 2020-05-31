#!/bin/bash

#
# This script will generate a unique version string, including the short hashcode of the commit
#
# The repo must be tagged with a version string in the form: vxx.xy.zz
#
# This script should be located in and run from the top level within the repo
#

if [ ! -z "${1}" ] ; then
	echo "usage: $0"
	echo "note: repo is expected to have a tag of the form: vxx.xy.zz"
	exit 1
fi

revisioncount=$(git rev-list HEAD | wc -l | awk '{printf("%04d\n", $1)}')
projectversion=$(git tag | tail -1)
committed=$(git rev-parse --short=6 HEAD)

branch=$(git branch | grep \* | cut -d\   -f2-)
[[ "master" == "${branch}" ]] || optBranch="_${branch}"

echo "${projectversion}-${revisioncount}_r${committed}${optBranch}" | sed 's/-/_/g' | sed 's|/|~|g'
