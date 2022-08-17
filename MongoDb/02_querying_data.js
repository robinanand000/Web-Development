// searching/querying data from mongo database

use robinkart

// this query will return all obj with rating equal to 4.8
db.items.find({rating:4.8})

// this query will return all obj with rating equal to 4.8
db.items.find({rating:{$gte:4}})

// $gte: >=
// $gt: >

// and operator
db.items.find({rating:{$gt:4},price:{$gt:100000}})

// or operator
db.items.find({$or:[{rating:{$gt:4}},{price:{$lt:100000}}]})

// if we want to see only rating parameter
db.items.find({rating:{$gt:4}},{rating:1})

// if we want to see only rating parameter and other parameter also
db.items.find({rating:{$gt:4.2}},{rating:1,"name":1})
