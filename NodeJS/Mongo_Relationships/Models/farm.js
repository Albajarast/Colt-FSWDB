const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/relationshipsDemo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Autumn", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   { name: "Goddess Melon", price: 4.99, season: "Summer" },
//   { name: "Sugar Baby Watermelon", price: 3.99, season: "Summer" },
//   { name: "Asparagus", price: 2.99, season: "Spring" },
// ]);

const makeFarm = async () => {
  const farm = new Farm({
    name: "Los Fresnos",
    city: "Gijón, Asturias",
  });

  const melon = await Product.findOne({ name: "Goddess Melon" });

  farm.products.push(melon);
  console.log(farm);
  await farm.save();
};

// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Los Fresnos" });
  const watermelon = await Product.findOne({ name: "Sugar Baby Watermelon" });
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
};

// addProduct();

Farm.findOne({ name: "Los Fresnos" })
  .populate("products")
  .then((farm) => console.log(farm));
