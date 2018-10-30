var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var admin = require('../model/admin');

  

router.get("/",function(req,res){
	  console.log('eeeeeeeeeeeeee');
     admin.select(function(err,result){
         console.log(result);
       
        var pagedata = {title : "Welcome Admin", pagename : "admin/dashboard", message : req.flash('msg')};
	    res.render("admin_layout", pagedata);
	 });
    
    
});
 

module.exports=router;