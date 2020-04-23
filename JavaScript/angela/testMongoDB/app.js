const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Il faut mettre un nom"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 5,
    review: "bof bof"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 35,
});

// person.save();

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });

    }
})

Fruit.updateOne()


const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 5,
            review: "bof"
        },
        {
            name: "Orange",
            score: 7,
            review: "top"
        },
        {
            name: "Banana",
            score: 9,
            review: "Le meilleur"
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}