```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $addFields: {
      results: { $ifNull: [ "$results", [] ] } // Handle empty arrays from $lookup
    }
  },
  {
    $unwind: "$results"
  }
];
```