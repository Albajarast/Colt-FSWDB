const mongoose = require("mongoose");
const Campground = require("../models/campgrounds");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const newCamp = new Campground({
      author: "5fe9a4c2d8c02ea17fbca1ca", // user: david
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      title: `${sample(descriptors)} ${sample(places)}`,
      // image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos error nihil autem nam beatae voluptate eius quod itaque velit officia perspiciatis assumenda atque consequatur aspernatur eligendi, distinctio enim ea.",
      price,
      images: [
        {
          url:
            "https://res.cloudinary.com/albajara/image/upload/v1609206125/YelpCamp/upjmayxpfurm19auolbb.jpg",
          filename: "YelpCamp/upjmayxpfurm19auolbb",
        },
        {
          url:
            "https://res.cloudinary.com/albajara/image/upload/v1609206125/YelpCamp/s5bru6gikoymu39fjshd.jpg",
          filename: "YelpCamp/s5bru6gikoymu39fjshd",
        },
        {
          url:
            "https://res.cloudinary.com/albajara/image/upload/v1609206125/YelpCamp/dldd9l7dy0uvcxnkbkqe.jpg",
          filename: "YelpCamp/dldd9l7dy0uvcxnkbkqe",
        },
        {
          url:
            "https://res.cloudinary.com/albajara/image/upload/v1609206125/YelpCamp/pjrazui3pldcnpuycdfq.jpg",
          filename: "YelpCamp/pjrazui3pldcnpuycdfq",
        },
      ],
    });
    await newCamp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
