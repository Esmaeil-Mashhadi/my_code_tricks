const { default: mongoose } = require("mongoose");

async function connectDB(){
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to data base")).catch((error)=>{
    console.log( error ,'failed to connect to data base');
})


}

module.exports = {
    connectDB
}