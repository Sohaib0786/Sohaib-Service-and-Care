const express=require("express");
const router=express.Router();
const User=require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

const passport=require("passport");


router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");

});



router.post("/signup", wrapAsync(async(req,res)=>{
   
    try{
    let {username, email,password} =req.body;
    const newUser =new User({email,username});
         const registeredUser=await User.register(newUser, password);
         console.log(registeredUser);
         req.flash("success","welcome to service and repair");
         res.redirect("/listings");
    }catch(error){
        req.flash("error",error.message);
        res.redirect("/signup");


    }
}));



     router.get("/login",(req,res) =>{
        res.render("users/login.ejs");
     });
     
   router.post(
    "/login",
    passport.authenticate("local",{ 
        failureRedirect: '/login',
       failureFlash: true,
    }),
    async(req,res) =>{
       // res.send("welocome to Service and Repair! You are logged in!");
       req.flash("success","Welcome back to Service and Repair");
       res.redirect("/listings");
     }
     );

     router.get("/logout", (req,res,next)=>{
        req.logout((err)=>{
            if(err){
              return  next(err);
            }
            req.flash("success","you are logged out!");
             res.redirect("/");
        })
     })


module.exports=router;

