var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  const berita =[
    {
        judul : "Berita 1",
        isi : "Isi Berita 1"
    },
    {
        judul : "Berita 2",
        isi : "Isi Berita 2"
    },
   ];
   res.render('index', {title: 'Halaman Home', berita,  layout:'main'});
});

router.get('/about', function(req, res, next) {

   res.render('about', {title: 'Halaman About Us',  layout:'main'});
});

router.get('/contact', function(req, res, next) {

  res.render('contact', {title: 'Halaman Contact Us',  layout:'main'});
});

// route /prodi
router.get("/prodi", (req, res, next) => {
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
  res.render('prodi', {title: 'Halaman Prodi', prodi, layout:"main"});
});


module.exports = router;
