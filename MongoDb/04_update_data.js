// updating data in mongo db

use robinkart
show collections

// updateOne
db.items.updateOne({name:"iPhone 14 Pro Max"},{$set:{price:2}})

// updateMany
db.items.updateMany({name:"Moto 30s"},{$set:{price:3,rating:1.3}})