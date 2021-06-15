var express =require("express");
const port=process.env.PORT || 3000;
var app = express();
//endpoint ini berfungsi jika kita ingin mengambil dari hp web atau semacamnya jadi tinggal panggil gitu
//req inisemacam untuk request ke server itu res itu respone yang akan di lakukan

app.get("/intro",function (req,res){
    res.json([
        "Batagor","Angsle","Ronde","Rujak"
    ]);
});

//
app.get('/resep/:nama'  ,function (req,res){
    let namamenu = req.params.nama;
    res.json({
        informasi:namamenu
    })
});



app.get('/resep/:nama/:style'  ,function (req,res){
    let namamenu = req.params.nama;
    let stylemenu = req.params.style;
    res.json({
        informasi:namamenu,
        style:stylemenu
    })
});


app.get('/listall',function (req,res){
    let jenismasak = req.query.jenis;
    let jumlah = parseInt(req.query.jumlah);
    res.json({jenisnya:jenismasak,jum:jumlah});
});

// app.listen(3000);
//jika ada call back untuk ada menampilkan pesan
app.listen(port,()=>{
    console.log("Server sedang lamat berjalan di port 3000");
});