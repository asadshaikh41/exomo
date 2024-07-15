const mongoose=require('mongoose');
const username=encodeURIComponent("asad94758")
const password=encodeURIComponent('@Asad9284');
const cluster="cluster0.yepgfhq.mongodb.net"
const dbname="Rooms"
var mongourl=`mongodb+srv://${username}:${password}@${cluster}/${dbname}`

mongoose.connect(mongourl,{
    useUnifiedTopology:true, 
    useNewUrlParser:true
});

var connection=mongoose.connection

connection.on('error',()=>{
    console.log("Mongo DB connection failed");
});

connection.on('connected',()=>{
    console.log("Mongo DB connection successfull");
});

module.exports=mongoose