const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Oh no error!!!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a postive number"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Tire Pump",
  price: 19.5,
  categories: ["Cycling", "Safety"],
  size: ["S"],
});
bike
  .save()
  .then((data) => {
    console.log("it worked!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no an error");
    console.log(err);
  });

Product.findOneAndUpdate(
  { name: "Tire Pump" },
  { price: -19.99 },
  { new: true, runValidators: true }
);
