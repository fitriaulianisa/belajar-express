const Mahasiswa = require("/models/mahasiswa");
const Prodi = require("/models/prodi");
const path = require("path");
const fs = require("fs");

exports.createMahasiswa = async (req, res) => {
    const {npm, nama, prodi_id, jenis_kelamin, asal_sekolah } = req.body;
    if (!req.file) {
        return res.status(400).json({message: "File foto is required" });
    }
    try {
        const prodi = await Prodi.findById(prodi_id);
        if (!prodi) return res.status(404).json({ message: "Prodi not found" });

        const mahasiswa = new Mahasiswa({
            npm,
            nama,
            prodi_id,
            jenis_kelamin,
            asal_sekolah,
            foto: req.file ? req.file.path : null,
        });

        await mahasiswa.save();
        res.status(201).json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message});
};

exports.getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find().populate("prodi_id", "nama");
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};

exports.getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await mahasiswa.findById(req.params.id).populate(
            "prodi_id",
            "nama"

        );
        if (!mahasiswa)
            return res.status(404).json({ message: "Mahasiswa not found" });
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};
exports.updateMahasiswa = async (req, res) => {
    const { npm, nama, prodi_id, jenis_kelamin, asal_sekolah } = req.body;

    try {
        const mahasiswa = await Mahasiswa.findById(req.params.id);
        if (!mahasiswa)
            return res.status(404).json({ message: "Mahasiswa not found "});

        if (req.file) {
            if (mahasiswa.foto) {
                fs.unlinkSync(path.join(__dirname, "../", mahasiswa.foto));

            }
            mahasiswa.foto = req.file.path;
        }
        mahasiswa.npm = npm ?? mahasiswa.npm;
        mahasiswa.nama = nama ?? mahasiswa.nama;
        mahasiswa.prodi_id = prodi_id ?? mahasiswa.prodi_id;
        mahasiswa.jenis_kelamin = jenis_kelamin ?? mahasiswa.jenis_kelamin;
        mahasiswa.asal_sekolah = asal_sekolah ?? mahasiswa.asal_sekolah;

        await mahasiswa.save();
        res.json(mahasiswa);

    } catch (error) {
        red.status(500).json({ message: error.message});

    }
};

exports.deleteMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
        if (!mahasiswa)
            return res.status(404).json({ message: "Mahasiswa not found "});

        if (mahasiswa.foto) {
            fs.unlinkSync(path.join(__dirname, "../", mahasiswa.foto));
        }
        res.json({ message: "Mahasiswa deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
};

