const mongoose = require("mongoose");

const fakultasSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        trim: true,
    },
    singkatan: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: String,
        default: DataTransfer.now,
    },
})

const Fakultas = mongoose.model("Fakultas", fakultasSchema);

model.exports = Fakultas;