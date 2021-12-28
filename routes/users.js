import express from 'express';

const router = express.Router();
let users = [
    {
        "name": "pc builders",
        "location": "Jordan,Amman",
        "imageUrl": "https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/06/Leaders-logo-01-e1622658181175.png",
        "prodectName": "23/Lenovo Ideapad L3 Laptop, 15.6 Inch, Intel Core i3, 4GB RAM, 1TB, Dos/2021",
        "prodectImg" :"https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/02/unnamed-2-1.jpg",
        "price": "369JD" ,
        "sellerEmail":"maiada.ibrahim.27@icloud.com",
        "id": 228816,
        "description":"no description",
        "date_display": "23/12/2021"
    },
    
    {
        "name": "kids home",
        "location": "Jordan,Amman",
        "imageUrl": "https://cdn.shopgo.me/20210829-store-3j0a/branding/banner-51686618972.jpg?format=jpeg",
        "prodectName": "ROMANTIC SLIDING WARDROBE",
        "prodectImg" :"https://cdn.shopgo.me/20210829-store-3j0a/products/14450557/11574591.png?bg=ffffff&fit=contain&format=jpeg&height=1000&enlarge=0",
        "price": "1090.00JD" ,
        "sellerEmail":"maiada.ibrahim.27@icloud.com",
        "id": 228816,
        "description":"no description",
        "date_display": "23/12/2021" 
    },
    
    {
        "name": "Smartbuy",
        "location": "Jordan,Amman",
        "imageUrl": "https://smartbuy-me.com/smartbuystore/_ui/responsive/theme-yerabiab2c/images/smartbuy_share.jpg",
        "prodectName": "Daewoo Dish Washer 14 Set 8 Program Steel",
        "prodectImg" :"https://y-store-media-smartbuy.s3.amazonaws.com/sys-smartbuyb2c/images/h2a/h0c/8837015863326/ZHR0614ST0007.jpg",
        "price": "1090.00JD" ,
        "sellerEmail":"maiada.ibrahim.27@icloud.com",
        "description":"Daewoo Dish Washer 14 Set | 8 Program | A+++ | 3 basket | 3 Spray | LED Display | Steel",
        "id": 228816,
        "date_display": "23/12/2021" 
    },
    {
 
    }
   
];
router.get('/', (req,res)=>{
    console.log(users.name);
    res.send(users)
});

export default router;