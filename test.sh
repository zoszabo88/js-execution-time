#!/bin/bash
echo -n 'Clearing result files...'
echo '' > results.txt
echo 'DONE'

echo 'Running MAIN.JS'

TOTAL_TIME=0

for (( i=1; i <= 5; ++i ))
do
  START=$(date +%s%N)

  CONTENT=`node main.js`

  END=$(date +%s%N)
  DIFF=$(($END - $START))

  TOTAL_TIME=$(($TOTAL_TIME + $DIFF))
  echo "Run $i time: $DIFF"
done

AVERAGE_TIME=$(($TOTAL_TIME/5))
echo "Average time: $AVERAGE_TIME"

echo -e "test\t$AVERAGE_TIME" >> results.txt