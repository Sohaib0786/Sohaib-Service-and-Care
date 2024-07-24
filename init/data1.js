
/**********************************************************************************************************************/ 
const TyreListings = [
  
    {
        "title": "All-Season Tire",
        "description": "High performance all-season tire for passenger vehicles.",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCN0akmO2LNHmmet7Nkvx3J3Bu_80j6MyRw&s" ,
        "price":"2000",
        "model": "AS-100",
        "type": "All-Season"
    },
    {
        "title": "Winter Tire",
        "description": "Durable winter tire with excellent grip on snow and ice.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluhinB9IclsqYPdcWUVQrr6N4gU1v59_crQ&s",
        "price": 150.49,
        "model": "WT-200",
        "type": "Winter"
    },
    {
        "title": "Summer Tire",
        "description": "High-performance summer tire for dry and wet conditions.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JhAxJcqEbprqfgf0Upn1ffm5JLWNLnUwoF3jmv7RopdR0aLlJoEQPDJh5I8cqvCmbBA&usqp=CAU",
        "price": 110.75,
        "model": "ST-300",
        "type": "Summer"
    },
    {
        "title": "All-Terrain Tire",
        "description": "Versatile tire for off-road and on-road driving.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Y5BzPZjfMXIIl-5y3DfkWHGmqyBEN4XWKP4ch5d0wlLl0Rhqwi9Rdk7Orxeb_Qf1H34&usqp=CAU",
        "price": 180.20,
        "model": "AT-400",
        "type": "All-Terrain"
    },
    {
        "title": "Performance Tire",
        "description": "Tire designed for high-speed and performance vehicles.",
        "image": "https://i5.walmartimages.com/asr/a3a68003-5184-4a23-8f63-78c067c9ad38_1.8c3b7905545b34752b9d19d6461812f1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        "price": 200.99,
        "model": "PT-500",
        "type": "Performance"
    },
    {
        "title": "Mud Tire",
        "description": "Heavy-duty tire for muddy and rugged terrains.",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gU6i5GgVoth-9UaQGBy9UPqsaGTa4MMk8y2xOpYh8vkzBEFvAPa07bsZW_QUPob2emo&usqp=CAU",
        "price": 170.35,
        "model": "MT-600",
        "type": "Mud"
    },
    {
        "title": "Highway Tire",
        "description": "Smooth and quiet tire for highway driving.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGumU2ewVGnVpaCt5Xr0n5eXnFolXaFBU4Xg&s",
        "price": 130.50,
        "model": "HW-700",
        "type": "Highway"
    },
    {
        "title": "Touring Tire",
        "description": "Comfortable and long-lasting tire for touring vehicles.",
        "image": "https://images-cdn.ubuy.co.in/658fab3079e8256b691e031c-primewell-ps890-touring-225-65r16-100t.jpg",
        "price": 140.85,
        "model": "TT-800",
        "type": "Touring"
    },
    {
        "title": "Eco Tire",
        "description": "Fuel-efficient tire with low rolling resistance.",
        "image": "https://images-cdn.ubuy.ae/65a3c3ec8e564e0cf16a47a2-waterfall-eco-dynamic-175-70r14-84-h-all.jpg",
        "price": 115.99,
        "model": "ET-900",
        "type": "Eco"
    },
    {
        "title": "Run-Flat Tire",
        "description": "Safety tire that can run even when flat.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYklxRllc9uowQ10mtNly5ZJH-KK-EGmHp3PenULgaPnLXFZDADnD3pPsJbTj_bh7Y0yU&usqp=CAU",
        "price": 210.45,
        "model": "RF-1000",
        "type": "Run-Flat"
    },
    {
        "title": "Off-Road Tire",
        "description": "Tough tire for extreme off-road conditions.",
        "image": "https://www.maxxis.com/us/wp-content/uploads/sites/13/2021/01/CC-1024x1024.jpg",
        "price": 190.99,
        "model": "OR-1100",
        "type": "Off-Road"
    },
    {
        "title": "Commercial Tire",
        "description": "Durable tire for commercial trucks and vans.",
        "image": "https://commercial.bridgestone.com/content/dam/commercial/bridgestone/images/products/bridgestone/tbr/M749F/BS_M749F.png",
        "price": 160.99,
        "model": "CT-1200",
        "type": "Commercial"
    },
    {
        "title": "Racing Tire",
        "description": "High-performance tire for racing cars.",
        "image": "https://americanraceronline.com/aor_site/wp-content/uploads/2023/06/1024x1106__0003_LM-Asphalt.png",
        "price": 250.00,
        "model": "RT-1300",
        "type": "Racing"
    },
    {
        "title": "SUV Tire",
        "description": "Sturdy tire designed for SUVs.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbeyvD5cXRo3iETtMrif-qbGWM2tNXkjHDw&s",
        "price": 175.75,
        "model": "SUV-1400",
        "type": "SUV"
    },
    {
        "title": "Truck Tire",
        "description": "Heavy-duty tire for trucks and heavy vehicles.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/4/UU/DJ/TK/150993504/cfd-500x500.jpg",
        "price": 220.50,
        "model": "TR-1500",
        "type": "Truck"
    },
    {
        "title": "Motorcycle Tire",
        "description": "High grip tire for motorcycles.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjzOBu7uBvkifrSrpWDecUE9bhkqG_n7rWg&s",
        "price": 85.99,
        "model": "MC-1600",
        "type": "Motorcycle"
    },
  
    {
        "title": "Agricultural Tire",
        "description": "Strong tire for agricultural machinery.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7J4RpnB7dAhY_rRyN5Wvl-jBI0TAy5TVfA&s",
        "price": 300.99,
        "model": "AG-1800",
        "type": "Agricultural"
    },
    {
        "title": "Trailer Tire",
        "description": "Reliable tire for trailers and RVs.",
        "image": "https://www.goodyear.ca/dw/image/v2/BJQJ_PRD/on/demandware.static/-/Sites-goodyear-master-catalog/default/dwea84cc62/images/large/Endurance_Trailer_Tire_24464.png?sw=900&sh=800&sm=fit&sfrm=png",
        "price": 95.99,
        "model": "TR-1900",
        "type": "Trailer"
    },
    {
        "title": "Industrial Tire",
        "description": "Heavy-duty tire for industrial equipment.",
        "image": "https://www.hawktyre.com/data/thumb/res/en/20191023/7e60d183a80844df.jpg_20191023153923_330x260_w1.jpeg",
        "price": 350.49,
        "model": "IN-2000",
        "type": "Industrial"
    },
    {
        "title": "Luxury Tire",
        "description": "Premium tire for luxury vehicles.",
        "image": "https://f90.bimmerpost.com/forums/attachment.php?attachmentid=2121757&stc=1&d=1565895256",
        "price": 230.75,
        "model": "LX-2100",
        "type": "Luxury"
    },
    {
        "title": "Compact Tire",
        "description": "Efficient tire for compact cars.",
        "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Apollo_Apterra_Cross_tyre_0_1200x768.jpeg?size=690:388",
        "price": 105.50,
        "model": "CP-2200",
        "type": "Compact"
    },
    {
        "title": "Vintage Tire",
        "description": "Classic tire for vintage cars.",
        "image": "https://e7.pngegg.com/pngimages/45/155/png-clipart-car-whitewall-tire-radial-tire-coker-tire-beautifully-tire-vintage-car-vehicle.png",
        "price": 195.00,
        "model": "VT-2300",
        "type": "Vintage"
    },
    {
        "title": "Heavy-Duty Tire",
        "description": "Extra durable tire for heavy-duty vehicles.",
        "image": "https://tiimg.tistatic.com/fp/2/008/368/14x12-centimeter-section-width-heavy-duty-retread-truck-tyre-for-truck-054.jpg",
        "price": 240.99,
        "model": "HD-2400",
        "type": "Heavy-Duty"
    },
    {
        "title": "Sport Tire",
        "description": "High grip tire for sports cars.",
        "image": "https://images.simpletire.com/images/q_auto/f_auto,q_auto,fl_lossy,h_3840/line-images/14328/14328-sidetread/arroyo-grand-sport-a-s.png",
        "price": 215.75,
        "model": "SP-2500",
        "type": "Sport"
    },


    {
        "title": "All-Weather Tire",
        "description": "Tire suitable for all weather conditions.",
        "image": "https://static.tirerack.com/content/dam/tires/firestone/fs_weathergrip_full.jpg",
        "price": 135.99,
        "model": "AW-2800",
        "type": "All-Weather"
    },
    {
        "title": "Low Profile Tire",
        "description": "Stylish low profile tire for modern cars.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy4Nb-0malsJYw3khws57E6UW7maHinbdIQ&s",
        "price": 185.49,
        "model": "LP-2900",
        "type": "Low Profile"
    },
    {
        "title": "Radial Tire",
        "description": "High-performance radial tire.",
        "image": "https://images.vldata.com.au/tyre-patterns/2938-1697163771-manf-angle-large.png",
        "price": 125.00,
        "model": "RD-3000",
        "type": "Radial"
    },
    {
        "title": "Bias Ply Tire",
        "description": "Classic bias ply tire for vintage vehicles.",
        "image": "https://www.restore-an-old-car.com/image-files/f60-15-classic-car-tire.jpg",
        "price": 145.00,
        "model": "BP-3100",
        "type": "Bias Ply"
    },
    {
        "title": "Recreational Tire",
        "description": "Tire designed for recreational vehicles.",
        "image": "https://gladiatortires.com/wp-content/uploads/atr-1.png",
        "price": 140.00,
        "model": "RC-3200",
        "type": "Recreational"
    },
    {
        "title": "Heavy Load Tire",
        "description": "Tire designed for heavy load vehicles.",
        "image": "https://image.made-in-china.com/2f0j00ivmcCqFGwMbh/Good-price-15x4-5-8-forklift-solid-tires-high-wear-resistance-high-load-capacity-and-maintenance-free-tire.webp",
        "price": 260.00,
        "model": "HL-3300",
        "type": "Heavy Load"
    },
    {
        "title": "Snow Tire",
        "description": "Tire specifically designed for snowy conditions.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRldI8FsSBfFejHNfaQ0FCCShooBudGn9jRIYuvBGBctrFig5_DyASIp6J0keCe_Kp0k&usqp=CAU",
        "price": 170.00,
        "model": "SN-3400",
        "type": "Snow"
    },
    {
        "title": "Light Truck Tire",
        "description": "Tire designed for light trucks.",
        "image": "https://generaltire.com/sites/default/files/styles/tire_teaser_image/public/tires/images/tireThumb_Grabber_ATX_0.png?itok=KT8BBuq5",
        "price": 165.00,
        "model": "LT-3500",
        "type": "Light Truck"
    }
];

module.exports={data:TyreListings};

  
