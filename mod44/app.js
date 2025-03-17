const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("mongoose running");
    })
    .catch(() => {
        console.log("mongoose Problem");
    });
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});
const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.address.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}
// makeUser();
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}
addAddress('67d7ef88a6682fae65133bf1');