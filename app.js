if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");  //import the express with the help of require module 
const app = express();
const mongoose = require("mongoose");
const Listing = require("./Models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");  //EJS mate is basically used to create the template and layout which is used repeatedly
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./Models/user.js");
const session = require("express-session");
const flash = require("connect-flash");
//const passport=require("passport");
const userRouter = require("./routes/user.js");
const {isLoggedIn} = require("./middleware.js");


//const MONGO_URL="mongodb://127.0.0.1:27017/Cartyre";

const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine(`ejs`, ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});


app.use("/", userRouter);




/*
app.get("/demouser", async (req, res) => {
    let fakeUser = new Usert({

        email: "student@gmail.com",
        username: "delta-student"

    });

    let registeredUser = await Usert.register(fakeUser, "helloworld");
    // console.log(registeredUser);
    res.send(registeredUser);
})
*/

app.get("/", (req, res) => {           //create a  root route 
    res.render("listings/front.ejs");
});



const validateListing = (req, res, next) => {

    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }

}

//index route
app.get("/listings",isLoggedIn, wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    
    res.render("listings/index.ejs", { allListings });
}));

//new Route
app.get("/listing/new", (req, res) => {
    res.render("listings/new.ejs");

});

//show route

app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "It does not exist for which you have requested!");
        res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });

}));

//create post

app.post(
    "/listings",
    validateListing,
    wrapAsync(async (req, res, next) => {
        //let  {title,description,image,price,country,location}=req.body;
        //  let listing=req.body;       
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        //  console.log(newListing);
        req.flash("success", "New Tyre details added!");
        res.redirect("/listings");
    })

);

/*
   Update:Edit and update Route

   Get   /listings/:id/edit  --->edit form --->submit


   put   /listings/:id      
*/
app.get("/listings/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "It does not exist for which you have requested!");
            res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    }));



app.put("/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {

        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });

        res.redirect(`/Listings/${id}`);
    }));



//DELete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Tyre Deleted!");
    res.redirect("/listings");
}));






/*



/*

app.get("/testListing", async (req,res)=>{
    let sampleListing=new Listing({
        title:"Runway load tire",
        description:"Suitable for all the heavy vhicles",
        
        price:1200,
        model:"MNl-123",
        type:"all Seasons",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");


});

*/

app.all("*", (req, res, next) => {
    next(new ExpressError(404, " page Not Found!"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    // res.send("some thing went wrong");
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("server is listening at port 8080");

});