// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/robinkart', {useNewUrlParser: true,useUnifiedTopology:true});

var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    // we are connected
    console.log("We are connected bro..")
});

const kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function speak() {
    const greeting ="My name is " + this.name
    console.log(greeting);
};

const Kitten = mongoose.model('robinkitty', kittySchema);

const robinkitty = new Kitten({ name: 'robinkitty' });
// console.log(robinkitty.name);
// robinkitty.speak();
const robinkitty2 = new Kitten({ name: 'robinkitty' });
// console.log(robinkitty.name);
// robinkitty.speak();

robinkitty.save(function (err, k) {
    if (err) return console.error(err);
    robinkitty.speak();
  });

Kitten.find({name:"robinkitty"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });

