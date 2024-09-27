const express = require("express") // impor modul express
const app = express() // inisialisasi express
const port = 3001 // port

app.set('view engine', 'ejs');

// route /
app.get("/", (req, res) => {
    // res.send("Hello");
    // res.sendFile(__dirname + "/index.html")

    const berita = [{
        judul: "Berita 1",
        isi: "Isi Berita 1"
    },
    {
        judul: "Berita 2",
        isi: "Isi Berita 2"

    }]
    res.render('index', {title: 'Halaman Home', berita});
});

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    // res.sendFile(__dirname + "/about.html");
    res.render('about', {title: 'Halaman About'});
});

// route /contact
app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    // res.sendFile(__dirname + "/Contact.html");
    res.render('contact', {title: 'Halaman Contact'});
});

// route / mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message": "Data Mahasiswa",
        "data" : [{npm: 2226240118, nama: "fitri"}, {npm: 2226240119, nama: "aulia"}, {npm: 2226240120, nama: "nisa"}]

    })
});

// route / dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Dosen",
        "data" : [
            {
                 Prodi: "Sistem Informasi", 
                 namadosen: ["Iis", "Faris", "Dafid"]
            },
            {    
                Prodi: "Informatika", 
                namadosen: ["Derry", "Siska", "Yohannes"]
            }, 
        ]
    })
});

// route /prodi
app.get("/prodi", (req, res) => {
    const prodi = [{
        namaProdi: "Sistem Informasi",
        Fakultas: "FIKR",
        Singkatan: "SI"
    },
    {
        namaProdi: "Informatika",
        Fakultas: "FIKR",
        Singkatan: "IF"

    },
    {
        namaProdi: "Teknik Elektro",
        Fakultas: "FIKR",
        Singkatan: "TE"
    },
    {
        namaProdi: "Manajemen Informatika",
        Fakultas: "FIKR",
        Singkatan: "MI"
    },
    {
        namaProdi: "Manajemen",
        Fakultas: "FEB",
        Singkatan: "MJ"
    },
    {
        namaProdi: "Akuntansi",
        Fakultas: "FEB",
        Singkatan: "AK"
    }]
    res.render('prodi', {title: 'Halaman Prodi', prodi});
});



//handle route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Nout Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});
