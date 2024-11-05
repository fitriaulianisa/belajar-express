const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://aulianisafitri434:mongodbfitri44@cluster0.caeph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("mongoDB Connected...");
    } catch (error){
        console.error("MongoDB connection error:", error);

        process.exit(1);
    }
    };

    module.exports = connectDB;