const { default: mongoose } = require("mongoose")

const ConnectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            process.env.NODE_ENV && console.log("Database Connected.");
        }).
        catch((err) => {
            console.log("Error :", err.message);
        })
};

module.exports = ConnectDatabase;