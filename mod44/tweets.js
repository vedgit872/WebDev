const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("mongoose running");
    })
    .catch(() => {
        console.log("mongoose Problem");
    });
const userSchema = new Schema({
    username: String,
    age: Number
});
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});
const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
// const user = new User({ username: 'chickenfan99', age: 61 });
// const user = await User.findOne({ username: 'chickenfan99' });
// const tweet2 = new Tweet({ text: 'You are a duffer', likes: 1239 });
// await user.save();
// tweet2.user = user;
//     await tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet();