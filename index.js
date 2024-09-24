const express = require("express") // impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

// route /
app.get("/", (req, res) => {
    // res.send("Hello");
    res.sendFile(__dirname + "/index.html")
});

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    res.sendFile(__dirname + "/about.html");
});

// route /contact
app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    res.sendFile(__dirname + "/Contact.html");
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


//handle route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Nout Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});