const mongoose=require("mongoose");
const initData=require("./data1.js");
const List=require("../Models/listing.js");


const MONGO_URL="mongodb://127.0.0.1:27017/Cartyre";

main().then(()=>{
    console.log("connected to DB");
}).catch(err =>{
    console.log(err);
});  
async function main() {
      await mongoose.connect(MONGO_URL);
}


const initDB= async ()=>{
    await List.deleteMany({});
    await List.insertMany(initData.data);
    console.log("data was initialized");
};


initDB();