// deleting data from mongo database

db.items.find({rating:{$gt:4}})

db.items.deleteOne({rating:{$gt:4}})

// inserting and deleting are same bro