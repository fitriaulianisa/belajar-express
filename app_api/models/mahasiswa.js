const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    npm: {
        type: String,
        required: true,
        unique: true,
    },
    nama: {
        type: String,
        required: true,
    },
    prodi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodi",
        required: false,
    },
    jenis_kelamin: {
        type: String,
        enum: ["L", "P"],
        required: true,
    },
    asal_sekolah: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    
},
{ timestamps: true }
);

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

module.exports = Mahasiswa;