const bcrypt = require('bcrypt');

const hashpass = async () => {
    const salt = await bcrypt.genSalt(12);
    console.log(salt);
};
const pass = async (pw) => {
    const salt = await bcrypt.genSalt(12);//greater the rounds greater the time
    const pas = await bcrypt.hash(pw, salt);
    const pass = await bcrypt.hash(pw, 12);
    console.log(salt);
    console.log(pas);
    console.log(pass);
}
const checkpassword = async (pw, hash) => {
    const is = await bcrypt.compare(pw, hash);
    console.log(is);
}
// hashpass();
pass('monkey');
// checkpassword('monkey', '$2b$12$N51qVyK5O2tE/wFWRF5ut.JaMutqm.FBhNdynsNdzmfeJgv.oIX22');