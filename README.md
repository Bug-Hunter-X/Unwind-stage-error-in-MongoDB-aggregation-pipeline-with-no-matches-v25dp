# MongoDB Aggregation Pipeline Error: $unwind with No Matches
This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines after a `$lookup` that doesn't find any matching documents.
The `$unwind` operator expects an array as input and throws an error if the array is empty.  This is a subtle error, as it only appears when there's a missing relationship in the data.

## How to reproduce
1. Clone this repository.
2. Run the provided `bug.js` script.
3. Note the error message that occurs when the `$lookup` stage does not find matches. This is the common issue we are addressing.
4. Examine `bugSolution.js` to see how to handle this situation gracefully.

## Solution
The `bugSolution.js` file provides a corrected version of the aggregation pipeline.  It uses the `$ifNull` operator to provide a default value when `$lookup` returns an empty array. This prevents the `$unwind` stage from failing.