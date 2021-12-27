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
        "id": 228816,
        "date_display": "23/12/2021"
    },
    {
        "name": "pc builders",
        "location": "Jordan,Amman",
        "imageUrl": "https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/06/Leaders-logo-01-e1622658181175.png",
        "prodectName": "23/Lenovo Ideapad L3 Laptop, 15.6 Inch, Intel Core i3, 4GB RAM, 1TB, Dos/2021",
        "prodectImg" :"https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/02/unnamed-2-1.jpg",
        "price": "369JD" ,
        "id": 228816,
        "description": "Model Number: 81Y300LCAX-15IML05 , /n Screen Size: 15.6 inch, Screen Resolution: 1920* 1080 Pixel, Proceessor: Intel Core i3-10110U ,  RAM: 4 GB , Storage Capacity: 1 TB , Operating System: DOS",
        "date_display": "23/12/2021"
    },
    {
        "name": "pc",
        "location": "Jordan,Amman",
        "imageUrl": "https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/06/Leaders-logo-01-e1622658181175.png",
        "prodectName": "23/Lenovo Ideapad L3 Laptop, 15.6 Inch, Intel Core i3, 4GB RAM, 1TB, Dos/2021",
        "prodectImg" :"https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/02/unnamed-2-1.jpg",
        "price": "369JD" ,
        "id": 228816,
        "date_display": "23/12/2021"
    },
    {
        "name": "pc builders",
        "location": "Jordan,Amman",
        "imageUrl": "https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/06/Leaders-logo-01-e1622658181175.png",
        "prodectName": "23/Lenovo Ideapad L3 Laptop, 15.6 Inch, Intel Core i3, 4GB RAM, 1TB, Dos/2021",
        "prodectImg" :"https://620880-2015646-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/02/unnamed-2-1.jpg",
        "price": "369JD" ,
        "id": 228816,
        "date_display": "23/12/2021"
    }
   
];
router.get('/', (req,res)=>{
    console.log(users.name);
    res.send(users)
});

export default router;