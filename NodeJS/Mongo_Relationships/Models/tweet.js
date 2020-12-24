const mongoose = require("mongoose");
const { Schema } = mongoose;

// DB Connection
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

// Schemas
const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
  // const user = new User({
  //   username: "ManoloCabezaBolo",
  //   age: "45",
  // });
  const user = await User.findOne({ username: "ManoloCabezaBolo" });
  const tweet = new Tweet({
    text: "Nos hemos vendido al capital y yo soy tu ejemplo",
    likes: 6666,
  });
  tweet.user = user;
  // user.save();
  tweet.save();
};

// makeTweet();

const findTweet = async () => {
  const tweet = await Tweet.findOne({}).populate("user", "username");
  const username = tweet.user.username;
  console.log(tweet);
  console.log(username);
};

findTweet();
