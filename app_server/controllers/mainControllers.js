const index = (req, res) => {
    const berita = [{
        judul: "Berita 1",
        isi: "Isi Berita 1"
    },
    {
        judul: "Berita 2",
        isi: "Isi Berita 2",

    },
];
    res.render('index', {title: 'Halaman Home', berita, layout:"main"});
} 

const about = (req, res) => {
    res.render('about', {title: 'Halaman About Us',  layout:'main'});
}

const contact = (req, res) => {
    res.render('contact', {title: 'Halaman Contact Us',  layout:'main'});
}


module.exports = {index, about, contact}