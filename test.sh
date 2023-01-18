#!/bin/bash

EXPECTED_RESULT=$1

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color


echo -n -e "${YELLOW} Clearing result files..."
echo '' > results.txt
echo 'DONE' && echo -e "${NC}"

for BRANCH in $(git for-each-ref --format='%(refname)' refs/heads/); do
  if [ "$BRANCH" = 'refs/heads/main' ]; then
    continue
  fi;

  BRANCH_NAME=$(echo $BRANCH | cut -d"/" -f3)
  git checkout $BRANCH_NAME > /dev/null
  echo -e "${GREEN}$BRANCH_NAME${NC} is checked out"
  echo ''

  echo 'Running MAIN.JS'

  TOTAL_TIME=0
  TEST_RUNS=9

  for (( i=1; i <= $TEST_RUNS; ++i )) do
    START=$(date +%s%N)

    CONTENT=`node main.js`

    END=$(date +%s%N)
    DIFF=$(($END - $START))

    TOTAL_TIME=$(($TOTAL_TIME + $DIFF))
    echo -n "Run $i time: $DIFF"
    if [ "$EXPECTED_RESULT" = "$CONTENT" ]; then
      echo -e " - ${GREEN}OK${NC}"
    else
      echo -e " - ${RED}NOT OK${NC}"
    fi
  done

  AVERAGE_TIME=$(($TOTAL_TIME/$TEST_RUNS))
  MILLISECONDS="$(($AVERAGE_TIME/1000000)).$(($AVERAGE_TIME%1000000))"
  echo -e "Average time for ${GREEN}$BRANCH_NAME${NC}: ${YELLOW}$MILLISECONDS${NC}" && echo ''

  echo -e "$BRANCH_NAME\t$MILLISECONDS" >> results.txt

done

git checkout main > /dev/null