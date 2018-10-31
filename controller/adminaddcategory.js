var express = require('express');
var router = express.Router();
var category = require("../model/category");
var changename = require('../helper/changefilename');
var fs = require('fs');
var path= require('path');




router.get("/", function(req, res){
	var pagedata = {title : "Add Category", pagename : "admin/add_category", message : req.flash('msg')};
	res.render("admin_layout", pagedata);
});
router.post("/", function(req, res)
{
    var file = req.files.image;
	var newname = changename(file.name);
	var filepath = path.resolve("public/category_images/"+newname);
	file.mv(filepath, function(err){

       if(err)
       {
         console.log(err);
		  	return;
       }
	   req.body.category_image =  newname;

	   category.insert(req.body, function(err, result){
		 req.flash("msg", "Successful added");
	 	 res.redirect("/admin/add_category");
	   });
	});
});

router.post("/update", function(req, res){

     
	var id = req.body.category_id;
	var image = req.body.category_image;
	delete req.body.category_id;
	delete req.body.category_image;
	 
	if(req.files.image)//{}
	{
		var file = req.files.image;
		console.log(req.body);
		var newname = changename(file.name);
		var filepath = path.resolve("public/category_images/"+newname);
		file.mv(filepath);
		req.body.category_image = newname;
		var oldfilepath = path.resolve("public/category_images/"+image);
		if(fs.existsSync(oldfilepath))
		   fs.unlinkSync(oldfilepath);
         
	}  

	 category.updateWhere({ category_id : id }, req.body, function(err, result){
	 	res.redirect("/admin/view_category");
	 });

});

router.delete("/",function(req,res){
      console.log('hello');
      // category.deletewhere({category_id:req.body.category_id},function(err,result){
      //   res.redirect("/admin/view_category");
      // }); 
 
});

router.post("/delete",function(req,res){
      console.log('hello');
      category.deletewhere({category_id:req.body.category_id},function(err,result){
        res.redirect("/admin/view_category");
      }); 
 
});

module.exports=router;