const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Connection error!");
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
    min: 0,
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
    enum: ["XS", "S", "M", "L", "XL"],
  },
});

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save(); // this is an async method and we will await it when using it in other functions/methods
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

Product.fireSale().then((res) => console.log(res));

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Test");
  console.log(foundProduct);
};

// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 49.5,
//   categories: ["Cycling"],
//   size: "XL",
// });

// bike
//   .save()
//   .then((data) => {
//     console.log("It Worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(["Oh no error!"]);
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -19.99 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It Worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(["Oh no error!"]);
//     console.log(err);
//   });
