const express=require('express');
const port=process.env.PORT || 3000;
const app = express();
app.get("/",function (req,res) {
    return res.send({type:"Indonesian",menu:["batagor","rujak","kluntung"]})
})

app.listen(port,function () {
    console.log("Listening to port 3000")
})
