const mongoose = require("mongoose");

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

// The Schema below will create a nested document for addresses with an _id

// const UserSchema = new mongoose.Schema({
//   first: String,
//   last: String,
//   addresses: [
//     {
//       street: String,
//       city: String,
//       state: String,
//       country: String,
//     },
//   ],
// });

// The Schema below will not create the _id parameter in the addresses nested document

const UserSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

// Async function that creates a new user in the DB

const makeUser = async () => {
  const u = new User({
    first: "David",
    last: "López",
  });
  u.addresses.push({
    street: "Manuel Llaneza 24 3ºD",
    city: "Gijón",
    state: "Asturias",
    country: "España",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "Calle Central 14",
    city: "Viavelez",
    state: "Asturias",
    country: "España",
  });
  const res = await user.save();
  console.log(res);
};

// Invoke the function to create a new user in the DB
// makeUser();

addAddress("5fe45f58c0788e2f8aafc3c8");
