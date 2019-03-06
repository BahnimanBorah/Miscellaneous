#!/bin/sh
find ../../../* -xdev -type f -name "*.txt" -print0 -exec grep -ri "DAV" {} + | xargs -0 sed -i 's/DAV/KVS/g'