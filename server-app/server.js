const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9191;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const stateRoute = require('./admin/state.route.js');
const cityRoute = require('./admin/city.route.js');
const productCatgRoute = require('./admin/productcatg.route.js');
const vendorRoute=require('./vendor/vendor.route.js');
const customerRoute=require("./customer/customer.route.js")
const productRoute=require("./product/product.route.js");
const billRoute=require("./admin/bills/bill.route.js");
const saleRoute = require("./vendor/sales.route.js");
const paymentdetailsRoute=require("./admin/bills/paymentdetails.route.js"); 
const paymentRoute =require("./payment.js");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/state', stateRoute);
app.use('/city', cityRoute);
app.use('/productcatg', productCatgRoute);
app.use("/vendor",vendorRoute);
app.use("/customer",customerRoute);
app.use("/product",productRoute);
app.use("/bill",billRoute);
app.use("/sales", saleRoute);
app.use("/paymentdetails",paymentdetailsRoute);
app.use("/payment",paymentRoute);

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL).then(
    () => {console.log('Database is connected'+process.env.MONGODB_URL) },
    err => { console.log('Can not connect to the database'+ err)}
  );
  
  app.listen(PORT, ()=>{
    console.log('Server is running on Port:',PORT);
  });