//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



mongoose.connect('mongodb://localhost:27017/toDoListDB', { useNewUrlParser: true, useUnifiedTopology: true });

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Il faut mettre un nom"]
  }
});

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    items: [itemsSchema]
  }
});

const Item = mongoose.model("Item", itemsSchema);

const List = mongoose.model("List", listSchema);

const item1 = new Item({
  name: "item1"
});
const item2 = new Item({
  name: "item2"
});
const item3 = new Item({
  name: "item3"
});

const defaultItems = [item1, item2, item3];



app.get("/", function (req, res) {

  Item.find({}, (err, foundItems) => {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
      res.redirect('/');
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }


  });


});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  });

  item.save();
  res.redirect('/');
  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

app.post("/delete", (req, res) => {
  const checkedItemId = req.body.checkbox



  Item.findByIdAndRemove(checkedItemId, (err) => {
    if (!err) {
      console.log("Bien supprimé");
      res.redirect('/');
    }
  });
});

app.get("/:customlistName", function (req, res) {

  const customlistName = req.params.listName;

  List.findOne({ name: customlistName }, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customlistName,
          items: defaultItems
        });
        list.save();
        res.redirect('/' + customlistName);
      } else {
        res.render('list', { listTitle: foundList.name, newListItems: foundList.item });
      }
    }

  });



});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
