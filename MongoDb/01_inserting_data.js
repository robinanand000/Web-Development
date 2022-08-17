// inserting data into mongodb

use robinkart
db.items.insertOne(
    {name:"Samsung 30s",price:22000,rating:4.3,qtn:233,sold:73}
)

db.items.insertMany([
    {name:"Samsung 30s",price:22000,rating:4.3,qtn:233,sold:73},
    {name:"Moto 30s",price:33000,rating:3.3,qtn:93,sold:43},
    {name:"iPhone 14 Pro Max",price:150000,rating:4.8,qtn:200,sold:190}
])


