const mongoose = require('mongoose');

const connectDatabase = () => {
    // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => {
    //     console.log("Mongoose Connected");
    // }).catch((error) => {
    //     console.log("UNABLE TO CONNECT");
    //     console.log(error);
    // });

    mongoose
    .connect('mongodb://127.0.0.1:27017/insta', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
}

module.exports = connectDatabase;