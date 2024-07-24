/*
Model:Listing-------->place(Apartment,flat,house,villa,hotel)


* title: String
* desciption: String
* image: String
* price: number
* location: String
* country:String


* set:(v)=>v===" "?link:v
this is called a ternary operator
*/

const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const listingSchema=new Schema({
    title:{      
      type:String,
      require:true
    
      
    },

    description:String,
  
    image:{
      type:String,
      default:
       "https://images-cdn.ubuy.co.in/66161e9ae8d91368921cb812-bfgoodrich-hd-terrain-ta-kt-all-terrain.jpg",
      set:(v)=>
      v===""
      ?"https://images-cdn.ubuy.co.in/66161e9ae8d91368921cb812-bfgoodrich-hd-terrain-ta-kt-all-terrain.jpg"
      : v,
    },

     price:Number,

     model:String,

     type:String,

});

const List=mongoose.model("List",listingSchema);
  module.exports=List;
